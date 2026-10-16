const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.portfolio-menu');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('open', open);
});
menu.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('open');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
});
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.form-status').textContent = 'Your form is valid. This layout preview does not send messages.';
});
