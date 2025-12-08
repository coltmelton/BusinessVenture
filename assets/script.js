document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu]');
  const navLinks = document.querySelector('[data-nav]');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  const contactForm = document.querySelector('#contact-form');
  const statusEl = document.querySelector('[data-form-status]');
  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (statusEl) statusEl.textContent = 'Sending...';

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(contactForm),
        });

        if (res.ok) {
          if (statusEl) statusEl.textContent = 'Thanks! Message sent.';
          contactForm.reset();
        } else {
          if (statusEl) statusEl.textContent = 'Send failed. Please email me directly.';
        }
      } catch (err) {
        if (statusEl) statusEl.textContent = 'Send failed. Please email me directly.';
      }
    });
  }
});
