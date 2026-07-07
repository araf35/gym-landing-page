document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.classList.toggle('active');
      const panel = button.nextElementSibling;
      if (expanded) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
      }
    });
  });

  const scrollTopButton = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const activeButton = document.querySelector('.accordion-button.active');
  if (activeButton) {
    const panel = activeButton.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
});
