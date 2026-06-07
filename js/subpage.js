/* Dark mode */
const html = document.documentElement;
const isDark = localStorage.getItem('ge-theme') === 'dark';
html.setAttribute('data-theme', isDark ? 'dark' : 'light');

/* Language switcher */
const subT = {
  pl: { back: '← Wszystkie usługi', cta: 'Zadzwoń', book: 'Umów wizytę', hours: 'Pon–Pt: 10:00–18:00<br>Szyszkowa 41a, Warszawa (Okęcie)' },
  ru: { back: '← Все услуги', cta: 'Позвонить', book: 'Записаться', hours: 'Пн–Пт: 10:00–18:00<br>Шышкова 41a, Варшава (Окенче)' },
  ua: { back: '← Всі послуги', cta: 'Зателефонувати', book: 'Записатися', hours: 'Пн–Пт: 10:00–18:00<br>Шишкова 41a, Варшава (Окенче)' },
  en: { back: '← All services', cta: 'Call us', book: 'Book a visit', hours: 'Mon–Fri: 10:00–18:00<br>Szyszkowa 41a, Warsaw (Okęcie)' }
};

function applySubLang(lang) {
  const t = subT[lang] || subT.pl;
  document.querySelectorAll('.subpage-back').forEach(el => el.textContent = t.back);
  document.querySelectorAll('[data-sub="cta"]').forEach(el => el.textContent = t.cta);
  document.querySelectorAll('[data-sub="book"]').forEach(el => el.textContent = t.book);
  document.querySelectorAll('.subpage-hours').forEach(el => el.innerHTML = t.hours);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let dark = isDark;
  let lang = localStorage.getItem('ge-lang') || 'pl';
  applySubLang(lang);

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    dark = !dark;
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('ge-theme', dark ? 'dark' : 'light');
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      lang = btn.dataset.lang;
      localStorage.setItem('ge-lang', lang);
      applySubLang(lang);
    });
  });
});
