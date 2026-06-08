/* ============================================================
   main.js — Go Electro
   Dark mode · i18n (PL/EN/RU/UA) · GSAP · Nav · Lightbox
   ============================================================ */

/* Prevent browser from jumping to URL hash anchor on load/refresh */
if (history.scrollRestoration) history.scrollRestoration = 'manual';
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

/* ----------------------------------------------------------
   TRANSLATIONS
---------------------------------------------------------- */
const translations = {
  pl: {
    'nav.about':'O nas','nav.services':'Usługi','nav.gallery':'Galeria',
    'nav.reviews':'Opinie','nav.contact':'Kontakt','nav.cta':'Zadzwoń',
    'hero.title.line1':'Serwis hybryd','hero.title.line2':'i elektryków',
    'hero.title.city':'Warszawa',
    'hero.sub':'Specjaliści od Toyota, Lexus, BMW, Mercedes i VW. Diagnostyka, baterie HV, elektryka, rozrząd.',
    'hero.cta.call':'+48 690 222 010','hero.cta.services':'Nasze usługi',
    'about.label':'O nas','about.title':'Elektryczne serce każdego auta',
    'about.desc':'Go Electro to warsztat, który zna hybrydy i elektryki od środka. Pracujemy z układami HEV i PHEV na poziomie dealerskim – bez przepłacania u oficjalnego serwisu. Każda naprawa to oryginalne części i pełna diagnostyka komputerowa.',
    'about.pillar1.title':'Hybrydy i EV','about.pillar1.desc':'HEV, PHEV, BEV – diagnozujemy i naprawiamy baterie HV, inwertery, silniki elektryczne.',
    'about.pillar2.title':'Oryginalne części','about.pillar2.desc':'Używamy tylko sprawdzonych podzespołów OEM i OE. Żadnych zamienników na skróty.',
    'about.pillar3.title':'Szybka realizacja','about.pillar3.desc':'Większość napraw tego samego dnia. Diagnostyka i wycena od ręki.',
    'services.label':'Usługi','services.title':'Co robimy','services.sub':'Pełen zakres napraw dla aut hybrydowych i elektrycznych.',
    's1.title':'Diagnostyka komputerowa','s1.desc':'Pełen odczyt błędów wszystkich sterowników. Interpretacja i plan naprawy.',
    's2.title':'Serwis układu hybrydowego','s2.desc':'Naprawa i kalibracja układów HEV/PHEV. Inwertery, silniki trakcyjne, przekształtniki.',
    's3.title':'Regeneracja baterii HV','s3.desc':'Regeneracja i wymiana akumulatorów trakcyjnych. Diagnostyka każdej celi.',
    's4.title':'Elektryka i elektronika','s4.desc':'Naprawa instalacji elektrycznej, sterowników, modułów, ADAS i CarPlay.',
    's5.title':'Wymiana rozrządu','s5.desc':'Pasek i łańcuch rozrządu ze wszystkimi elementami pomocniczymi.',
    's6.title':'Kapitalny remont silnika','s6.desc':'Pełny remont jednostki napędowej. Uszczelnienia, głowice, wały.',
    's7.title':'Hamulce i zawieszenie','s7.desc':'Klocki, tarcze, amortyzatory, geometria. Sprawna jazda przez cały rok.',
    's8.title':'Wymiana oleju i płynów','s8.desc':'Olej, filtry, płyn hamulcowy, chłodniczy. Cena wymiany oleju od 200 zł – wszystko wliczone.',
    'brands.label':'Obsługiwane marki',
    'brands.sub':'Specjalizujemy się w Toyota, Lexus, BMW, Mercedes-Benz, Volkswagen, Honda, Hyundai, Kia, Mitsubishi, Ford — oraz wszystkich innych markach z napędem hybrydowym i elektrycznym.',
    'video.label':'Realizacje','video.title':'W naszym warsztacie','video.sub':'Prawdziwe naprawy. Prawdziwe efekty.',
    'evac.label':'Ewakuacja','evac.title':'Przyjedziemy po Twoje auto',
    'evac.desc':'Masz awarię? Nie musisz szukać pomocy. Zapewniamy transport auta do naszego warsztatu — bezpiecznie, w każdym stanie.',
    'evac.price':'Cena ewakuacji od 250 zł.','evac.cta':'Zadzwoń: +48 690 222 010',
    'gallery.label':'Galeria','gallery.title':'Nasze prace','gallery.more':'Więcej zdjęć',
    'reviews.label':'Opinie','reviews.title':'Co mówią klienci','reviews.count':'na podstawie 73 opinii w Google',
    'contact.label':'Kontakt','contact.title':'Przyjedź do nas',
    'contact.address.title':'Adres','contact.phone.title':'Telefon','contact.hours.title':'Godziny otwarcia',
    'contact.hours.weekdays':'Pon – Pt: 10:00 – 18:00','contact.hours.weekend':'Sob – Nd: zamknięte',
    'contact.cta':'Zadzwoń teraz',
    'footer.copy':'© 2025 AutoSerwis Go Electro. Wszelkie prawa zastrzeżone.',
    'footer.address':'Szyszkowa 41a, 02-285 Warszawa','mobile.cta':'Zadzwoń: +48 690 222 010',
  },
  en: {
    'nav.about':'About','nav.services':'Services','nav.gallery':'Gallery',
    'nav.reviews':'Reviews','nav.contact':'Contact','nav.cta':'Call us',
    'hero.title.line1':'Hybrid &','hero.title.line2':'EV service',
    'hero.title.city':'Warsaw',
    'hero.sub':'Specialists in Toyota, Lexus, BMW, Mercedes and VW. Diagnostics, HV batteries, electrics, timing.',
    'hero.cta.call':'+48 690 222 010','hero.cta.services':'Our services',
    'about.label':'About us','about.title':'The electric heart of every car',
    'about.desc':'Go Electro is a workshop that knows hybrids and EVs inside out. We work with HEV and PHEV systems at dealer level – without dealer prices. Every repair uses original parts and full computer diagnostics.',
    'about.pillar1.title':'Hybrids & EVs','about.pillar1.desc':'HEV, PHEV, BEV – we diagnose and repair HV batteries, inverters, electric motors.',
    'about.pillar2.title':'Original parts','about.pillar2.desc':'We only use verified OEM and OE components. No shortcuts.',
    'about.pillar3.title':'Fast turnaround','about.pillar3.desc':'Most repairs completed same day. Diagnostics and estimate on the spot.',
    'services.label':'Services','services.title':'What we do','services.sub':'Full range of repairs for hybrid and electric vehicles.',
    's1.title':'Computer diagnostics','s1.desc':'Full fault code reading of all controllers. Interpretation and repair plan.',
    's2.title':'Hybrid system service','s2.desc':'Repair and calibration of HEV/PHEV systems. Inverters, traction motors, converters.',
    's3.title':'HV battery regeneration','s3.desc':'Regeneration and replacement of traction batteries. Diagnostics of each cell.',
    's4.title':'Electrics & electronics','s4.desc':'Electrical installation repair, ECUs, modules, ADAS and CarPlay.',
    's5.title':'Timing belt / chain','s5.desc':'Timing belt and chain with all auxiliary components.',
    's6.title':'Engine overhaul','s6.desc':'Full engine unit overhaul. Seals, heads, shafts.',
    's7.title':'Brakes & suspension','s7.desc':'Pads, discs, shock absorbers, geometry. Safe driving all year round.',
    's8.title':'Oil & fluid change','s8.desc':'Oil, filters, brake fluid, coolant. Oil change from 200 PLN – all inclusive.',
    'brands.label':'Brands we service',
    'brands.sub':'We specialise in Toyota, Lexus, BMW, Mercedes-Benz, Volkswagen, Honda, Hyundai, Kia, Mitsubishi, Ford — and all other hybrid and electric vehicle brands.',
    'video.label':'Portfolio','video.title':'Inside our workshop','video.sub':'Real repairs. Real results.',
    'evac.label':'Recovery','evac.title':'We\'ll come for your car',
    'evac.desc':'Breakdown? You don\'t need to look for help. We provide transport of your car to our workshop — safely, in any condition.',
    'evac.price':'Recovery from 250 PLN.','evac.cta':'Call: +48 690 222 010',
    'gallery.label':'Gallery','gallery.title':'Our work','gallery.more':'More photos',
    'reviews.label':'Reviews','reviews.title':'What clients say','reviews.count':'based on 73 Google reviews',
    'contact.label':'Contact','contact.title':'Visit us',
    'contact.address.title':'Address','contact.phone.title':'Phone','contact.hours.title':'Opening hours',
    'contact.hours.weekdays':'Mon – Fri: 10:00 – 18:00','contact.hours.weekend':'Sat – Sun: closed',
    'contact.cta':'Call now',
    'footer.copy':'© 2025 AutoSerwis Go Electro. All rights reserved.',
    'footer.address':'Szyszkowa 41a, 02-285 Warsaw','mobile.cta':'Call: +48 690 222 010',
  },
  ru: {
    'nav.about':'О нас','nav.services':'Услуги','nav.gallery':'Галерея',
    'nav.reviews':'Отзывы','nav.contact':'Контакты','nav.cta':'Позвонить',
    'hero.title.line1':'Сервис гибридов','hero.title.line2':'и электромобилей',
    'hero.title.city':'Варшава',
    'hero.sub':'Специалисты по Toyota, Lexus, BMW, Mercedes и VW. Диагностика, батареи HV, электрика, ГРМ.',
    'hero.cta.call':'+48 690 222 010','hero.cta.services':'Наши услуги',
    'about.label':'О нас','about.title':'Электрическое сердце каждого авто',
    'about.desc':'Go Electro — мастерская, которая знает гибриды и электромобили изнутри. Работаем с системами HEV и PHEV на дилерском уровне — без переплат у официального сервиса. Каждый ремонт — оригинальные запчасти и полная компьютерная диагностика.',
    'about.pillar1.title':'Гибриды и EV','about.pillar1.desc':'HEV, PHEV, BEV — диагностируем и ремонтируем батареи HV, инверторы, электромоторы.',
    'about.pillar2.title':'Оригинальные запчасти','about.pillar2.desc':'Используем только проверенные компоненты OEM и OE. Никаких компромиссов.',
    'about.pillar3.title':'Быстрое выполнение','about.pillar3.desc':'Большинство ремонтов в тот же день. Диагностика и оценка на месте.',
    'services.label':'Услуги','services.title':'Что мы делаем','services.sub':'Полный спектр ремонта гибридных и электрических автомобилей.',
    's1.title':'Компьютерная диагностика','s1.desc':'Полное считывание ошибок всех ЭБУ. Интерпретация и план ремонта.',
    's2.title':'Сервис гибридной системы','s2.desc':'Ремонт и калибровка систем HEV/PHEV. Инверторы, тяговые двигатели, преобразователи.',
    's3.title':'Регенерация батарей HV','s3.desc':'Регенерация и замена тяговых аккумуляторов. Диагностика каждой ячейки.',
    's4.title':'Электрика и электроника','s4.desc':'Ремонт электропроводки, ЭБУ, модулей, ADAS и CarPlay.',
    's5.title':'Замена ГРМ','s5.desc':'Ремень и цепь ГРМ со всеми вспомогательными элементами.',
    's6.title':'Капремонт двигателя','s6.desc':'Полный ремонт силового агрегата. Уплотнения, головки, валы.',
    's7.title':'Тормоза и подвеска','s7.desc':'Колодки, диски, амортизаторы, геометрия. Надёжная езда круглый год.',
    's8.title':'Замена масла и жидкостей','s8.desc':'Масло, фильтры, тормозная жидкость, антифриз. Замена масла от 200 злотых — всё включено.',
    'brands.label':'Обслуживаемые марки',
    'brands.sub':'Специализируемся на Toyota, Lexus, BMW, Mercedes-Benz, Volkswagen, Honda, Hyundai, Kia, Mitsubishi, Ford — а также всех других марках с гибридным и электрическим приводом.',
    'video.label':'Реализации','video.title':'В нашей мастерской','video.sub':'Настоящие ремонты. Настоящие результаты.',
    'evac.label':'Эвакуация','evac.title':'Приедем за вашим авто',
    'evac.desc':'Авария? Не нужно искать помощь. Обеспечиваем транспортировку автомобиля в нашу мастерскую — безопасно, в любом состоянии.',
    'evac.price':'Цена эвакуации от 250 злотых.','evac.cta':'Позвонить: +48 690 222 010',
    'gallery.label':'Галерея','gallery.title':'Наши работы','gallery.more':'Больше фото',
    'reviews.label':'Отзывы','reviews.title':'Что говорят клиенты','reviews.count':'на основе 73 отзывов в Google',
    'contact.label':'Контакты','contact.title':'Приезжайте к нам',
    'contact.address.title':'Адрес','contact.phone.title':'Телефон','contact.hours.title':'Часы работы',
    'contact.hours.weekdays':'Пн – Пт: 10:00 – 18:00','contact.hours.weekend':'Сб – Вс: закрыто',
    'contact.cta':'Позвонить сейчас',
    'footer.copy':'© 2025 AutoSerwis Go Electro. Все права защищены.',
    'footer.address':'Шишкова 41a, 02-285 Варшава','mobile.cta':'Позвонить: +48 690 222 010',
  },
  ua: {
    'nav.about':'Про нас','nav.services':'Послуги','nav.gallery':'Галерея',
    'nav.reviews':'Відгуки','nav.contact':'Контакти','nav.cta':'Зателефонувати',
    'hero.title.line1':'Сервіс гібридів','hero.title.line2':'та електромобілів',
    'hero.title.city':'Варшава',
    'hero.sub':'Спеціалісти з Toyota, Lexus, BMW, Mercedes та VW. Діагностика, батареї HV, електрика, ГРМ.',
    'hero.cta.call':'+48 690 222 010','hero.cta.services':'Наші послуги',
    'about.label':'Про нас','about.title':'Електричне серце кожного авто',
    'about.desc':'Go Electro — майстерня, яка знає гібриди та електромобілі зсередини. Працюємо з системами HEV і PHEV на дилерському рівні — без переплат в офіційному сервісі. Кожен ремонт — оригінальні запчастини та повна комп\'ютерна діагностика.',
    'about.pillar1.title':'Гібриди та EV','about.pillar1.desc':'HEV, PHEV, BEV — діагностуємо та ремонтуємо батареї HV, інвертори, електромотори.',
    'about.pillar2.title':'Оригінальні запчастини','about.pillar2.desc':'Використовуємо лише перевірені компоненти OEM та OE. Жодних компромісів.',
    'about.pillar3.title':'Швидке виконання','about.pillar3.desc':'Більшість ремонтів того ж дня. Діагностика та оцінка одразу.',
    'services.label':'Послуги','services.title':'Що ми робимо','services.sub':'Повний спектр ремонту гібридних та електричних автомобілів.',
    's1.title':'Комп\'ютерна діагностика','s1.desc':'Повне зчитування помилок всіх ЕБУ. Інтерпретація та план ремонту.',
    's2.title':'Сервіс гібридної системи','s2.desc':'Ремонт та калібрування систем HEV/PHEV. Інвертори, тягові двигуни, перетворювачі.',
    's3.title':'Регенерація батарей HV','s3.desc':'Регенерація та заміна тягових акумуляторів. Діагностика кожної комірки.',
    's4.title':'Електрика та електроніка','s4.desc':'Ремонт електропроводки, ЕБУ, модулів, ADAS та CarPlay.',
    's5.title':'Заміна ГРМ','s5.desc':'Ремінь та ланцюг ГРМ з усіма допоміжними елементами.',
    's6.title':'Капремонт двигуна','s6.desc':'Повний ремонт силового агрегату. Ущільнення, головки, вали.',
    's7.title':'Гальма та підвіска','s7.desc':'Колодки, диски, амортизатори, геометрія. Надійна їзда протягом усього року.',
    's8.title':'Заміна масла та рідин','s8.desc':'Масло, фільтри, гальмівна рідина, антифриз. Заміна масла від 200 злотих — все включено.',
    'brands.label':'Марки автомобілів',
    'brands.sub':'Спеціалізуємося на Toyota, Lexus, BMW, Mercedes-Benz, Volkswagen, Honda, Hyundai, Kia, Mitsubishi, Ford — а також всіх інших марках з гібридним та електричним приводом.',
    'video.label':'Реалізації','video.title':'У нашій майстерні','video.sub':'Справжні ремонти. Справжні результати.',
    'evac.label':'Евакуація','evac.title':'Приїдемо за вашим авто',
    'evac.desc':'Аварія? Не потрібно шукати допомогу. Забезпечуємо транспортування авто до нашої майстерні — безпечно, у будь-якому стані.',
    'evac.price':'Ціна евакуації від 250 злотих.','evac.cta':'Зателефонувати: +48 690 222 010',
    'gallery.label':'Галерея','gallery.title':'Наші роботи','gallery.more':'Більше фото',
    'reviews.label':'Відгуки','reviews.title':'Що кажуть клієнти','reviews.count':'на основі 73 відгуків у Google',
    'contact.label':'Контакти','contact.title':'Приїжджайте до нас',
    'contact.address.title':'Адреса','contact.phone.title':'Телефон','contact.hours.title':'Години роботи',
    'contact.hours.weekdays':'Пн – Пт: 10:00 – 18:00','contact.hours.weekend':'Сб – Нд: зачинено',
    'contact.cta':'Зателефонувати зараз',
    'footer.copy':'© 2025 AutoSerwis Go Electro. Усі права захищені.',
    'footer.address':'Шишкова 41a, 02-285 Варшава','mobile.cta':'Зателефонувати: +48 690 222 010',
  }
};

/* ----------------------------------------------------------
   i18n — apply translations
---------------------------------------------------------- */
let currentLang = localStorage.getItem('ge-lang') || 'pl';

function applyLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('ge-lang', lang);
  document.documentElement.lang = lang === 'ua' ? 'uk' : lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  // Update all lang buttons (there are two sets: desktop + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* ----------------------------------------------------------
   DARK MODE
---------------------------------------------------------- */
const html = document.documentElement;
let isDark = localStorage.getItem('ge-theme') === 'dark';

function applyTheme(dark) {
  isDark = dark;
  html.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('ge-theme', dark ? 'dark' : 'light');
}

/* ----------------------------------------------------------
   INIT
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved theme
  applyTheme(isDark);

  // Apply saved language
  applyLang(currentLang);

  /* --- NAV scroll (threshold 80px) + logo swap --- */
  const nav = document.getElementById('nav');
  const navLogo = document.getElementById('navLogo');
  const onScroll = () => {
    const scrolled = window.scrollY > 80;
    nav.classList.toggle('scrolled', scrolled);
    if (navLogo) navLogo.src = scrolled ? 'assets/img/logo-black.png' : 'assets/img/logo-white.png';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Hero slideshow — cross-fade, no flash --- */
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length) {
    let cur = 0;
    slides[0].classList.add('active');

    setInterval(() => {
      const next = (cur + 1) % slides.length;

      slides[next].style.transform = 'scale(1.0)';
      slides[next].classList.add('active');

      setTimeout(() => {
        slides[cur].classList.remove('active');
        slides[cur].style.transform = '';
        cur = next;
      }, 1200);
    }, 7000);
  }

  /* --- Hamburger --- */
  const hamburger  = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      mobileMenu.setAttribute('aria-hidden', String(open));
      mobileMenu.classList.toggle('open', !open);
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileMenu.classList.remove('open');
    }));
  }

  /* --- Dark mode toggle --- */
  document.getElementById('theme-toggle')?.addEventListener('click', () => applyTheme(!isDark));

  /* --- Language buttons --- */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  /* --- Smooth scroll --- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* --- Gallery: lightbox on item click --- */
  const galleryItems = document.querySelectorAll('.gallery-scroll-item');
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  /* --- Lightbox --- */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = lightbox?.querySelector('.lightbox__close');
  const prevBtn     = lightbox?.querySelector('.lightbox__prev');
  const nextBtn     = lightbox?.querySelector('.lightbox__next');
  let currentIdx    = 0;

  const getItems = () => Array.from(document.querySelectorAll('.gallery-scroll-item img'));

  const openLightbox = idx => {
    const items = getItems();
    if (!items[idx]) return;
    currentIdx = idx;
    lightboxImg.src = items[idx].src;
    lightboxImg.alt = items[idx].alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const navigate = dir => {
    const items = getItems();
    currentIdx = (currentIdx + dir + items.length) % items.length;
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = items[currentIdx].src;
      lightboxImg.alt = items[currentIdx].alt;
      lightboxImg.style.opacity = '1';
    }, 110);
  };

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => navigate(-1));
  nextBtn?.addEventListener('click', () => navigate(1));
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigate(-1);
    if (e.key === 'ArrowRight')  navigate(1);
  });

  /* --- GSAP animations --- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const reveal = (sel, stagger = 0.1, trigger) => {
      const els = document.querySelectorAll(sel);
      if (!els.length) return;
      gsap.fromTo(els,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger,
          scrollTrigger: { trigger: trigger || els[0].closest('section') || els[0], start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    };

    // Hero
    gsap.fromTo('.hero__title',   { opacity:0, y:40 }, { opacity:1, y:0, duration:0.9, delay:0.3, ease:'power3.out' });
    gsap.fromTo('.hero__sub',     { opacity:0, y:28 }, { opacity:1, y:0, duration:0.8, delay:0.55, ease:'power3.out' });
    gsap.fromTo('.hero__actions', { opacity:0, y:20 }, { opacity:1, y:0, duration:0.7, delay:0.75, ease:'power3.out' });

    // Parallax
    gsap.to('.hero__bg img', {
      yPercent: 18, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    // Sections
    reveal('.about__pillar', 0.15);
    reveal('.service-card', 0.07);
    reveal('.video__item', 0.09);
    reveal('.gallery__item', 0.04);
    reveal('.review-card', 0.1);
    reveal('.contact__block', 0.12);
    reveal('.evac__content > *', 0.1);

    document.querySelectorAll('.section__title, .section__label, .section__sub, .brands__sub').forEach(el => {
      gsap.fromTo(el, { opacity:0, y:18 }, {
        opacity:1, y:0, duration:0.65, ease:'power3.out',
        scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none' }
      });
    });
  }

});
