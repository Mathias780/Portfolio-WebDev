const nav = document.getElementById('nav');
const toggle = document.querySelector('.nav-toggle');


//Nav For phones
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

//Dark mode / Light mode
const toTop = document.querySelector('.to-top');

if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function applyTheme(mode) {
  root.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  if (themeToggle) {
    themeToggle.textContent = mode === 'dark' ? 'Light' : 'Dark';
  }
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const startTheme = savedTheme || (prefersDark ? 'dark' : 'light');
applyTheme(startTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
}
