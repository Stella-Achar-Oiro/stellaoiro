---
title: "AWS Lambda for Healthcare Applications: Security Best Practices"
description: "Learn how to build secure, HIPAA-compliant serverless healthcare applications with AWS Lambda"
date: 2025-11-13
author: Achar Oiro
categories:
  - AWS
  - Healthcare
  - Tutorial
tags:
  - lambda
  - serverless
  - hipaa
  - security
  - python
featured: true
image: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800
imageAlt: "AWS Lambda serverless computing for healthcare"
readTime: 14
layout: layouts/post.njk
---

AWS Lambda is perfect for healthcare applications: you don't manage servers, you pay only for what you use, and it scales automatically. But using Lambda for Protected Health Information (PHI) requires careful security configuration.

I've built multiple HIPAA-compliant Lambda functions for healthcare systems. This guide shows you exactly how to do it right.

## What You'll Learn

- Lambda security architecture for healthcare
- HIPAA compliance requirements for serverless
- VPC configuration for Lambda
- Secrets management for healthcare apps
- Encryption at rest and in transit
- Audit logging for PHI access
- Real-world healthcare Lambda patterns

## Why Lambda for Healthcare?

**Traditional Approach:**
- Provision EC2 instances
- Patch and maintain servers
- Pay for idle time
- Scale manually
- Complex infrastructure

**Lambda Approach:**
- No servers to manage
- Automatic scaling
- Pay per request ($0.20 per million requests)
- Built-in high availability
- Focus on code, not infrastructure

**But here's the catch**: Default Lambda configuration is NOT HIPAA-compliant. You need specific security controls.

## HIPAA Requirements for Lambda

### The Security Rule Requirements

1. **Network Isolation**: Lambda must run in VPC (not default internet-accessible configuration)
2. **Encryption**: All PHI must be encrypted at rest and in transit
3. **Access Controls**: Strict IAM policies following least privilege
4. **Audit Logging**: All PHI access logged via CloudWatch and CloudTrail
5. **Data Integrity**: Ensure PHI isn't modified unauthorized
6. **Authentication**: Proper authentication for Lambda triggers

### AWS BAA Coverage

Lambda is covered under AWS Business Associate Agreement (BAA) for HIPAA, but only when properly configured.

## Architecture Patterns

### Pattern 1: API Gateway + Lambda + RDS

```
Patient Portal (HTTPS)
        ↓
API Gateway (TLS 1.2+)
        ↓
Lambda (VPC, Encrypted env vars)
        ↓
RDS PostgreSQL (Encrypted, VPC)
```

**Use Case**: Patient record retrieval, appointment booking

### Pattern 2: S3 Event + Lambda + Processing

```
Medical Document Upload → S3 (Encrypted)
        ↓ (S3 Event)
Lambda (Process/Extract)
        ↓
DynamoDB (Encrypted) + CloudWatch (Audit)
```

**Use Case**: Medical document processing, DICOM image handling

### Pattern 3: HL7/FHIR Message Processing

```
EHR System → SQS Queue (Encrypted)
        ↓
Lambda (Parse HL7/FHIR)
        ↓
Database + EventBridge (Downstream processing)
```

**Use Case**: HL7 ADT messages, FHIR resource processing

## Step 1: VPC Configuration

Lambda must run in a VPC to isolate from public internet.

### Create VPC for Healthcare Lambda

```bash
# Create VPC
aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --tag-specifications 'ResourceType=vpc,Tags=[{Key=Name,Value=healthcare-lambda-vpc},{Key=HIPAA,Value=true}]'

# Create private subnets (at least 2 for high availability)
aws ec2 create-subnet \
  --vpc-id vpc-xxxxx \
  --cidr-block 10.0.1.0/24 \
  --availability-zone us-east-1a \
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=healthcare-lambda-private-1a}]'

aws ec2 create-subnet \
  --vpc-id vpc-xxxxx \
  --cidr-block 10.0.2.0/24 \
  --availability-zone us-east-1b \
  --tag-specifications 'ResourceType=subnet,Tags=[{Key=Name,Value=healthcare-lambda-private-1b}]'

# Create security group
aws ec2 create-security-group \
  --group-name healthcare-lambda-sg \
  --description "Security group for HIPAA Lambda functions" \
  --vpc-id vpc-xxxxx
```

### Terraform VPC Configuration

```hcl
# terraform/vpc.tf
resource "aws_vpc" "healthcare_lambda" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name  = "healthcare-lambda-vpc"
    HIPAA = "true"
  }
}

resource "aws_subnet" "lambda_private" {
  count             = 2
  vpc_id            = aws_vpc.healthcare_lambda.id
  cidr_block        = "10.0.${count.index + 1}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "healthcare-lambda-private-${count.index + 1}"
    Type = "Private"
  }
}

resource "aws_security_group" "lambda" {
  name        = "healthcare-lambda-sg"
  description = "Security group for HIPAA Lambda functions"
  vpc_id      = aws_vpc.healthcare_lambda.id

  # Allow outbound to RDS
  egress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  # Allow outbound HTTPS for AWS services
  egress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name  = "healthcare-lambda-sg"
    HIPAA = "true"
  }
}

# VPC Endpoints for AWS services (no internet required)
resource "aws_vpc_endpoint" "s3" {
  vpc_id       = aws_vpc.healthcare_lambda.id
  service_name = "com.amazonaws.us-east-1.s3"

  tags = {
    Name = "healthcare-s3-endpoint"
  }
}

resource "aws_vpc_endpoint" "dynamodb" {
  vpc_id       = aws_vpc.healthcare_lambda.id
  service_name = "com.amazonaws.us-east-1.dynamodb"

  tags = {
    Name = "healthcare-dynamodb-endpoint"
  }
}
```

## Step 2: Lambda Function with Encryption

### Python Lambda Function Template

```python
# lambda_function.py
import json
import boto3
import os
import logging
from datetime import datetime
from typing import Dict, Any

# Configure logging (CloudWatch)
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Initialize AWS clients
dynamodb = boto3.resource('dynamodb')
kms = boto3.client('kms')
secrets_manager = boto3.client('secretsmanager')

# Environment variables (encrypted with KMS)
TABLE_NAME = os.environ['PATIENT_TABLE']
KMS_KEY_ID = os.environ['KMS_KEY_ID']
DB_SECRET_ARN = os.environ['DB_SECRET_ARN']

def get_db_credentials():
    """Retrieve database credentials from Secrets Manager"""
    try:
        response = secrets_manager.get_secret_value(SecretId=DB_SECRET_ARN)
        return json.loads(response['SecretString'])
    except Exception as e:
        logger.error(f"Error retrieving DB credentials: {str(e)}")
        raise

def encrypt_phi(data: str) -> bytes:
    """Encrypt PHI using KMS"""
    response = kms.encrypt(
        KeyId=KMS_KEY_ID,
        Plaintext=data.encode('utf-8')
    )
    return response['CiphertextBlob']

def decrypt_phi(encrypted_data: bytes) -> str:
    """Decrypt PHI using KMS"""
    response = kms.decrypt(
        CiphertextBlob=encrypted_data
    )
    return response['Plaintext'].decode('utf-8')

def audit_log(user_id: str, action: str, patient_id: str, ip_address: str = None):
    """Log PHI access for HIPAA audit trail"""
    log_entry = {
        'timestamp': datetime.utcnow().isoformat(),
        'user_id': user_id,
        'action': action,
        'patient_id': patient_id,
        'ip_address': ip_address,
        'function_name': os.environ.get('AWS_LAMBDA_FUNCTION_NAME'),
        'request_id': os.environ.get('AWS_REQUEST_ID')
    }

    logger.info(f"AUDIT: {json.dumps(log_entry)}")

    # Also store in DynamoDB audit table
    audit_table = dynamodb.Table(os.environ.get('AUDIT_TABLE'))
    audit_table.put_item(Item=log_entry)

def lambda_handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    HIPAA-compliant Lambda handler for patient data access
    """
    try:
        # Extract user context from API Gateway authorizer
        user_id = event['requestContext']['authorizer']['claims']['sub']
        user_role = event['requestContext']['authorizer']['claims'].get('cognito:groups', [])
        ip_address = event['requestContext']['identity']['sourceIp']

        # Parse request
        body = json.loads(event['body'])
        patient_id = body.get('patient_id')

        # Validate authorization (example: only providers can access)
        if 'Provider' not in user_role and 'Admin' not in user_role:
            logger.warning(f"Unauthorized access attempt by user {user_id}")
            return {
                'statusCode': 403,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'  # Configure properly for production
                },
                'body': json.dumps({'error': 'Insufficient permissions'})
            }

        # Log PHI access
        audit_log(user_id, 'GET_PATIENT_RECORD', patient_id, ip_address)

        # Retrieve patient data
        table = dynamodb.Table(TABLE_NAME)
        response = table.get_item(
            Key={'patient_id': patient_id}
        )

        if 'Item' not in response:
            return {
                'statusCode': 404,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Patient not found'})
            }

        patient_data = response['Item']

        # Decrypt sensitive fields if stored encrypted
        if 'ssn_encrypted' in patient_data:
            patient_data['ssn'] = decrypt_phi(patient_data['ssn_encrypted'].value)
            del patient_data['ssn_encrypted']

        logger.info(f"Successfully retrieved patient {patient_id} for user {user_id}")

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
                'Strict-Transport-Security': 'max-age=31536000'
            },
            'body': json.dumps({
                'patient': patient_data
            }, default=str)  # Handle datetime serialization
        }

    except Exception as e:
        logger.error(f"Error processing request: {str(e)}", exc_info=True)

        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Internal server error'})
        }
```

### Lambda Deployment Package

```bash
# Create deployment package
mkdir lambda_package
cd lambda_package

# Install dependencies
pip install boto3 -t .

# Add your code
cp ../lambda_function.py .

# Create zip
zip -r lambda_function.zip .

# Upload to Lambda
aws lambda create-function \
  --function-name healthcare-patient-api \
  --runtime python3.11 \
  --role arn:aws:iam::ACCOUNT_ID:role/lambda-hipaa-role \
  --handler lambda_function.lambda_handler \
  --zip-file fileb://lambda_function.zip \
  --timeout 30 \
  --memory-size 512 \
  --vpc-config SubnetIds=subnet-xxx,subnet-yyy,SecurityGroupIds=sg-zzz \
  --environment Variables="{
    PATIENT_TABLE=patients,
    AUDIT_TABLE=audit_logs,
    KMS_KEY_ID=arn:aws:kms:us-east-1:ACCOUNT_ID:key/KEY_ID,
    DB_SECRET_ARN=arn:aws:secretsmanager:us-east-1:ACCOUNT_ID:secret:db-creds
  }" \
  --kms-key-arn arn:aws:kms:us-east-1:ACCOUNT_ID:key/KEY_ID
```

## Step 3: IAM Role with Least Privilege

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

**Lambda Execution Policy:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VPCAccess",
      "Effect": "Allow",
      "Action": [
        "ec2:CreateNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DeleteNetworkInterface"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CloudWatchLogs",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:us-east-1:ACCOUNT_ID:log-group:/aws/lambda/healthcare-*"
    },
    {
      "Sid": "DynamoDBAccess",
      "Effect": "Allow",
      "Action": [
        "dynamodb:GetItem",
        "dynamodb:PutItem",
        "dynamodb:Query"
      ],
      "Resource": [
        "arn:aws:dynamodb:us-east-1:ACCOUNT_ID:table/patients",
        "arn:aws:dynamodb:us-east-1:ACCOUNT_ID:table/audit_logs"
      ]
    },
    {
      "Sid": "KMSAccess",
      "Effect": "Allow",
      "Action": [
        "kms:Decrypt",
        "kms:Encrypt",
        "kms:GenerateDataKey"
      ],
      "Resource": "arn:aws:kms:us-east-1:ACCOUNT_ID:key/KEY_ID"
    },
    {
      "Sid": "SecretsManagerAccess",
      "Effect": "Allow",
      "Action": [
        "secretsmanager:GetSecretValue"
      ],
      "Resource": "arn:aws:secretsmanager:us-east-1:ACCOUNT_ID:secret:db-creds-*"
    }
  ]
}
```

## Step 4: API Gateway Integration

### API Gateway with Cognito Authorizer

```yaml
# serverless.yml (Serverless Framework example)
service: healthcare-api

provider:
  name: aws
  runtime: python3.11
  region: us-east-1
  vpc:
    securityGroupIds:
      - sg-xxxxxxxxx
    subnetIds:
      - subnet-xxxxxxxx
      - subnet-yyyyyyyy

  environment:
    PATIENT_TABLE: ${self:custom.patientTable}
    AUDIT_TABLE: ${self:custom.auditTable}
    KMS_KEY_ID: ${self:custom.kmsKeyId}

  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:GetItem
        - dynamodb:PutItem
      Resource:
        - arn:aws:dynamodb:${self:provider.region}:*:table/${self:custom.patientTable}
        - arn:aws:dynamodb:${self:provider.region}:*:table/${self:custom.auditTable}
    - Effect: Allow
      Action:
        - kms:Decrypt
        - kms:Encrypt
      Resource: ${self:custom.kmsKeyArn}

functions:
  getPatient:
    handler: lambda_function.lambda_handler
    events:
      - http:
          path: /patients/{id}
          method: get
          cors: true
          authorizer:
            type: COGNITO_USER_POOLS
            authorizerId:
              Ref: ApiGatewayAuthorizer

resources:
  Resources:
    ApiGatewayAuthorizer:
      Type: AWS::ApiGateway::Authorizer
      Properties:
        Name: CognitoAuthorizer
        Type: COGNITO_USER_POOLS
        IdentitySource: method.request.header.Authorization
        RestApiId:
          Ref: ApiGatewayRestApi
        ProviderARNs:
          - arn:aws:cognito-idp:us-east-1:ACCOUNT_ID:userpool/us-east-1_XXXXXX

custom:
  patientTable: patients-${self:provider.stage}
  auditTable: audit-logs-${self:provider.stage}
  kmsKeyId: alias/healthcare-phi
  kmsKeyArn: arn:aws:kms:us-east-1:ACCOUNT_ID:key/KEY_ID
```

## Step 5: HL7 Message Processing

```python
# hl7_processor.py
import json
import boto3
from hl7apy.parser import parse_message
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
sns = boto3.client('sns')

def lambda_handler(event, context):
    """
    Process HL7 ADT (Admission/Discharge/Transfer) messages from SQS
    """
    for record in event['Records']:
        # Parse SQS message
        hl7_message = record['body']

        try:
            # Parse HL7 message
            parsed = parse_message(hl7_message, validation_level=1)

            # Extract patient demographics
            pid_segment = parsed.PID

            patient_data = {
                'patient_id': str(pid_segment.PID_3),  # Patient ID
                'mrn': str(pid_segment.PID_2),          # Medical Record Number
                'name': {
                    'family': str(pid_segment.PID_5.PID_5_1),
                    'given': str(pid_segment.PID_5.PID_5_2)
                },
                'dob': str(pid_segment.PID_7),
                'gender': str(pid_segment.PID_8),
                'event_type': str(parsed.EVN.EVN_1),   # Event type (A01, A03, etc.)
                'event_datetime': str(parsed.EVN.EVN_2),
                'facility': str(parsed.MSH.MSH_4),
                'processed_at': datetime.utcnow().isoformat()
            }

            # Store in DynamoDB
            table = dynamodb.Table('patient_events')
            table.put_item(Item=patient_data)

            # Publish to SNS for downstream processing
            sns.publish(
                TopicArn='arn:aws:sns:us-east-1:ACCOUNT_ID:patient-events',
                Subject=f"Patient Event: {patient_data['event_type']}",
                Message=json.dumps(patient_data)
            )

            print(f"Successfully processed HL7 message for patient {patient_data['patient_id']}")

        except Exception as e:
            print(f"Error processing HL7 message: {str(e)}")
            # Send to DLQ for manual review
            raise

    return {
        'statusCode': 200,
        'body': json.dumps(f'Processed {len(event["Records"])} messages')
    }
```

## Step 6: CloudWatch Monitoring & Alerts

```python
# cloudwatch_alarms.py
import boto3

cloudwatch = boto3.client('cloudwatch')
sns = boto3.client('sns')

# Create SNS topic for alerts
topic = sns.create_topic(Name='healthcare-lambda-alerts')
topic_arn = topic['TopicArn']

# Subscribe email
sns.subscribe(
    TopicArn=topic_arn,
    Protocol='email',
    Endpoint='security@yourhealthcare.com'
)

# Alarm: High error rate
cloudwatch.put_metric_alarm(
    AlarmName='Healthcare-Lambda-HighErrors',
    ComparisonOperator='GreaterThanThreshold',
    EvaluationPeriods=1,
    MetricName='Errors',
    Namespace='AWS/Lambda',
    Period=300,
    Statistic='Sum',
    Threshold=10,
    ActionsEnabled=True,
    AlarmActions=[topic_arn],
    AlarmDescription='Alert on high Lambda error rate',
    Dimensions=[
        {
            'Name': 'FunctionName',
            'Value': 'healthcare-patient-api'
        }
    ]
)

# Alarm: Unauthorized access attempts
cloudwatch.put_metric_alarm(
    AlarmName='Healthcare-UnauthorizedAccess',
    ComparisonOperator='GreaterThanThreshold',
    EvaluationPeriods=1,
    MetricName='UnauthorizedAttempts',
    Namespace='Healthcare/Security',
    Period=60,
    Statistic='Sum',
    Threshold=5,
    ActionsEnabled=True,
    AlarmActions=[topic_arn],
    AlarmDescription='Alert on unauthorized access attempts'
)

# Alarm: Function duration (performance)
cloudwatch.put_metric_alarm(
    AlarmName='Healthcare-Lambda-SlowPerformance',
    ComparisonOperator='GreaterThanThreshold',
    EvaluationPeriods=2,
    MetricName='Duration',
    Namespace='AWS/Lambda',
    Period=300,
    Statistic='Average',
    Threshold=5000,  # 5 seconds
    ActionsEnabled=True,
    AlarmActions=[topic_arn],
    Dimensions=[
        {
            'Name': 'FunctionName',
            'Value': 'healthcare-patient-api'
        }
    ]
)
```

## HIPAA Compliance Checklist

Before deploying to production:

- [ ] **VPC Configuration**
  - [ ] Lambda runs in private subnets
  - [ ] Security groups configured with minimal access
  - [ ] VPC endpoints for AWS services (no internet egress)

- [ ] **Encryption**
  - [ ] Environment variables encrypted with KMS
  - [ ] Data at rest encrypted (DynamoDB, S3, RDS)
  - [ ] TLS 1.2+ for all data in transit
  - [ ] KMS key rotation enabled

- [ ] **Access Control**
  - [ ] IAM role follows least privilege
  - [ ] Cognito authorizer on API Gateway
  - [ ] MFA required for admin functions
  - [ ] Role-based access control (RBAC) implemented

- [ ] **Audit Logging**
  - [ ] CloudWatch Logs enabled
  - [ ] CloudTrail data events enabled
  - [ ] Custom audit logs for PHI access
  - [ ] Logs encrypted and retained 7+ years

- [ ] **Monitoring**
  - [ ] CloudWatch alarms for errors
  - [ ] Security alerts configured
  - [ ] Performance monitoring
  - [ ] Cost alerts set up

- [ ] **Business Associate Agreement**
  - [ ] BAA signed with AWS
  - [ ] Only BAA-eligible services used
  - [ ] Compliance documented

## Cost Optimization

### Lambda Pricing

**Compute:**
- $0.20 per million requests
- $0.0000166667 per GB-second

**Example: Healthcare API (10,000 patients)**
- 100,000 requests/month
- 512 MB memory, 1s average duration
- **Cost**: $0.02 (requests) + $0.83 (compute) = **$0.85/month**

Compare to EC2: $30-50/month minimum

### Optimization Tips

1. **Right-size memory**: Start at 512MB, measure actual usage
2. **Reduce cold starts**: Provisioned concurrency ($0.015 per GB-hour) for critical functions
3. **Reuse connections**: Database connection pooling
4. **Batch processing**: Process multiple records per invocation
5. **Lambda layers**: Share dependencies across functions

## Testing HIPAA Compliance

```python
# test_hipaa_compliance.py
import boto3
import pytest

def test_lambda_in_vpc():
    """Verify Lambda is in VPC"""
    lambda_client = boto3.client('lambda')
    response = lambda_client.get_function_configuration(
        FunctionName='healthcare-patient-api'
    )

    assert 'VpcConfig' in response
    assert len(response['VpcConfig']['SubnetIds']) >= 2
    print("✓ Lambda is in VPC with multiple subnets")

def test_environment_variables_encrypted():
    """Verify environment variables are encrypted"""
    lambda_client = boto3.client('lambda')
    response = lambda_client.get_function_configuration(
        FunctionName='healthcare-patient-api'
    )

    assert 'KMSKeyArn' in response
    print(f"✓ Environment variables encrypted with KMS: {response['KMSKeyArn']}")

def test_cloudwatch_logs_encrypted():
    """Verify CloudWatch logs are encrypted"""
    logs_client = boto3.client('logs')
    response = logs_client.describe_log_groups(
        logGroupNamePrefix='/aws/lambda/healthcare-'
    )

    for log_group in response['logGroups']:
        assert 'kmsKeyId' in log_group
        print(f"✓ Log group {log_group['logGroupName']} is encrypted")

def test_iam_role_least_privilege():
    """Verify IAM role has minimal permissions"""
    iam_client = boto3.client('iam')
    lambda_client = boto3.client('lambda')

    # Get Lambda role
    response = lambda_client.get_function_configuration(
        FunctionName='healthcare-patient-api'
    )
    role_name = response['Role'].split('/')[-1]

    # Get attached policies
    policies = iam_client.list_attached_role_policies(RoleName=role_name)

    # Should not have admin policies
    for policy in policies['AttachedPolicies']:
        assert 'Admin' not in policy['PolicyName']
        assert 'FullAccess' not in policy['PolicyName']

    print(f"✓ IAM role {role_name} follows least privilege")

if __name__ == '__main__':
    pytest.main([__file__, '-v'])
```

## Common Mistakes to Avoid

### ❌ Mistake 1: Running Lambda Outside VPC

```python
# WRONG: Lambda can access public internet
# No VPC configuration = security risk for PHI
```

**Fix**: Always configure VPC for healthcare Lambda functions.

### ❌ Mistake 2: Hardcoded Secrets

```python
# WRONG: Hardcoded database password
DB_PASSWORD = "supersecret123"

# CORRECT: Use Secrets Manager
secret = secrets_manager.get_secret_value(SecretId='db-creds')
DB_PASSWORD = json.loads(secret['SecretString'])['password']
```

### ❌ Mistake 3: No Audit Logging

```python
# WRONG: No logging of PHI access
patient = get_patient(patient_id)
return patient

# CORRECT: Log all PHI access
audit_log(user_id, 'GET_PATIENT', patient_id, ip_address)
patient = get_patient(patient_id)
return patient
```

### ❌ Mistake 4: Excessive IAM Permissions

```json
// WRONG: Lambda has full DynamoDB access
{
  "Effect": "Allow",
  "Action": "dynamodb:*",
  "Resource": "*"
}

// CORRECT: Specific table, specific actions
{
  "Effect": "Allow",
  "Action": ["dynamodb:GetItem", "dynamodb:PutItem"],
  "Resource": "arn:aws:dynamodb:us-east-1:ACCOUNT_ID:table/patients"
}
```

## Real-World Example: Telemedicine Platform

**Architecture:**
```
Patient App → API Gateway (Cognito Auth)
                    ↓
      Lambda: Schedule Appointment
                    ↓
      DynamoDB (Appointments) + SNS (Notifications)
```

**Implementation:**

```python
# schedule_appointment.py
import json
import boto3
from datetime import datetime
import uuid

dynamodb = boto3.resource('dynamodb')
sns = boto3.client('sns')

def lambda_handler(event, context):
    """Schedule telemedicine appointment"""

    # Extract user from Cognito authorizer
    user_id = event['requestContext']['authorizer']['claims']['sub']
    user_email = event['requestContext']['authorizer']['claims']['email']

    # Parse request
    body = json.loads(event['body'])

    appointment = {
        'appointment_id': str(uuid.uuid4()),
        'patient_id': user_id,
        'provider_id': body['provider_id'],
        'appointment_datetime': body['datetime'],
        'type': body.get('type', 'video'),
        'status': 'scheduled',
        'created_at': datetime.utcnow().isoformat()
    }

    # Save to DynamoDB
    table = dynamodb.Table('appointments')
    table.put_item(Item=appointment)

    # Send confirmation email via SNS
    sns.publish(
        TopicArn='arn:aws:sns:us-east-1:ACCOUNT_ID:appointment-notifications',
        Subject='Appointment Scheduled',
        Message=f"Your appointment is scheduled for {appointment['appointment_datetime']}",
        MessageAttributes={
            'email': {
                'DataType': 'String',
                'StringValue': user_email
            }
        }
    )

    return {
        'statusCode': 201,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({
            'appointment_id': appointment['appointment_id'],
            'datetime': appointment['appointment_datetime']
        })
    }
```

## Conclusion

AWS Lambda is powerful for healthcare applications when configured correctly for HIPAA compliance.

**Key Takeaways:**
1. Always run Lambda in VPC for PHI processing
2. Encrypt everything: environment variables, data at rest, data in transit
3. Use KMS for encryption keys
4. Implement comprehensive audit logging
5. Follow IAM least privilege principle
6. Test compliance before going to production

**Cost Comparison:**
- Lambda: $0.85/month (100K requests)
- EC2: $30-50/month minimum
- **Savings: 97%** while improving security and scalability

## Next Steps

- Read: [Building HIPAA-Compliant S3 Buckets](/blog/hipaa-compliant-s3-buckets/)
- Read: [5 AWS Services for Healthcare Startups](/blog/aws-services-for-healthcare-startups/)
- Download: [HIPAA Lambda Checklist](/resources/)
- Need Help? [Healthcare Cloud Consulting](/hire/)

## Questions?

Building serverless healthcare applications? I'd love to help.

**Email**: stellaacharoiro@gmail.com
**Consulting**: [Book a call](/hire/)

---

*Remember: This guide provides technical implementation details but does not constitute legal or compliance advice. Consult with qualified HIPAA compliance professionals for your specific situation.*
