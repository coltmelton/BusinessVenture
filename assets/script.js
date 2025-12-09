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

  const formspreeForms = document.querySelectorAll('[data-formspree]');
  formspreeForms.forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const statusEl = form.querySelector('[data-form-status]');
      if (statusEl) statusEl.textContent = 'Sending...';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });

        if (res.ok) {
          if (statusEl) statusEl.textContent = 'Thanks! Message sent.';
          form.reset();
        } else {
          if (statusEl) statusEl.textContent = 'Send failed. Please email me directly.';
        }
      } catch (err) {
        if (statusEl) statusEl.textContent = 'Send failed. Please email me directly.';
      }
    });
  });
});
