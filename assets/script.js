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
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const company = formData.get('company') || '';
      const phone = formData.get('phone') || '';
      const project = formData.get('project') || '';

      const subject = encodeURIComponent('Project inquiry');
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nProject: ${project}`
      );

      window.location.href = `mailto:coltmeltonwork@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
