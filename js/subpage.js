/* Dark mode for subpages */
const html = document.documentElement;
const isDark = localStorage.getItem('ge-theme') === 'dark';
html.setAttribute('data-theme', isDark ? 'dark' : 'light');

document.addEventListener('DOMContentLoaded', () => {
  let dark = isDark;
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    dark = !dark;
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('ge-theme', dark ? 'dark' : 'light');
  });
});
