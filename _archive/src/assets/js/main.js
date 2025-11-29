// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Newsletter Form Handling
  const newsletterForms = document.querySelectorAll('[data-newsletter]');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      const email = form.querySelector('input[name="email"]').value;
      const messageDiv = form.querySelector('.message');
      const submitBtn = form.querySelector('button[type="submit"]');

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';

      // For now, just show success message (integrate with ConvertKit/Mailchimp later)
      setTimeout(() => {
        messageDiv.classList.remove('hidden');
        messageDiv.className = 'message mt-2 text-sm text-green-600';
        messageDiv.textContent = 'Thanks for subscribing! Check your email to confirm.';

        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';

        // Hide message after 5 seconds
        setTimeout(() => {
          messageDiv.classList.add('hidden');
        }, 5000);
      }, 1000);

      // TODO: Replace with actual newsletter service integration
      /*
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          messageDiv.classList.remove('hidden');
          messageDiv.className = 'message mt-2 text-sm text-green-600';
          messageDiv.textContent = 'Thanks for subscribing! Check your email to confirm.';
          form.reset();
        } else {
          throw new Error('Subscription failed');
        }
      } catch (error) {
        messageDiv.classList.remove('hidden');
        messageDiv.className = 'message mt-2 text-sm text-red-600';
        messageDiv.textContent = 'Something went wrong. Please try again.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';
      }
      */
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll-up behavior to header
  let lastScroll = 0;
  const header = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
      // Scroll down
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      // Scroll up
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
  });
});
