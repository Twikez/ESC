const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.menu-close'); // new

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});