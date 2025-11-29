interface MetricsCardProps {
  metrics: {
    label: string
    value: string
    change: string
  }[]
}

export default function MetricsCard({ metrics }: MetricsCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-white/30">
            <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
            <div className="flex items-center gap-2 text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-semibold">{metric.change}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
