/* ============================================================
   main.js — Go Electro
   GSAP ScrollTrigger + Nav + Lightbox + Gallery
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     NAV — sticky scroll behaviour + hamburger
  ---------------------------------------------------------- */
  const nav        = document.getElementById('nav');
  const hamburger  = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      mobileMenu.classList.toggle('open', !isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ----------------------------------------------------------
     GSAP — scroll-reveal animations
  ---------------------------------------------------------- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const animateIn = (selector, stagger = 0.12) => {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      gsap.fromTo(els,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: els[0].closest('section') || els[0],
            start: 'top 82%',
            toggleActions: 'play none none none',
          }
        }
      );
    };

    // Hero content
    gsap.fromTo('.hero__badge',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power3.out' });
    gsap.fromTo('.hero__title',  { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
    gsap.fromTo('.hero__sub',    { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' });
    gsap.fromTo('.hero__actions',{ opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8, ease: 'power3.out' });

    // Sections
    animateIn('.about__text > *', 0.1);
    animateIn('.about__pillar', 0.15);
    animateIn('.about__images img', 0.18);
    animateIn('.service-card', 0.08);
    animateIn('.brands__strip span', 0.06);
    animateIn('.video__item', 0.1);
    animateIn('.gallery__item', 0.05);
    animateIn('.review-card', 0.1);
    animateIn('.contact__block', 0.12);

    // Section titles / labels
    document.querySelectorAll('.section__title, .section__label, .section__sub').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // Parallax hero bg
    gsap.to('.hero__bg img', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Brands strip slide-in
    gsap.fromTo('.brands__strip',
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.brands',
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  }

  /* ----------------------------------------------------------
     GALLERY — "Więcej zdjęć" button + lightbox
  ---------------------------------------------------------- */
  const galleryGrid    = document.getElementById('gallery-grid');
  const showMoreBtn    = document.getElementById('gallery-show-more');
  const allItems       = galleryGrid ? Array.from(galleryGrid.querySelectorAll('.gallery__item')) : [];
  const hiddenItems    = allItems.filter(el => window.getComputedStyle(el).display === 'none' ||
                                               el.matches(':nth-child(n+13)'));

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      allItems.forEach(item => {
        item.style.display = 'block';
        item.classList.add('visible');
      });
      showMoreBtn.style.display = 'none';
    });
  }

  // Lightbox
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const closeBtn     = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  const prevBtn      = lightbox ? lightbox.querySelector('.lightbox__prev') : null;
  const nextBtn      = lightbox ? lightbox.querySelector('.lightbox__next') : null;
  let currentIndex   = 0;

  const getVisibleItems = () => allItems.filter(el => el.style.display !== 'none' && el.offsetParent !== null);

  const openLightbox = (index) => {
    const items = getVisibleItems();
    if (!items[index]) return;
    currentIndex = index;
    const img = items[index].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    const items = getVisibleItems();
    currentIndex = (currentIndex + dir + items.length) % items.length;
    const img = items[currentIndex].querySelector('img');
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxImg.style.opacity = '1';
    }, 120);
  };

  allItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      const visible = getVisibleItems();
      const visibleIndex = visible.indexOf(item);
      openLightbox(visibleIndex >= 0 ? visibleIndex : i);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn)  prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn)  nextBtn.addEventListener('click', () => navigate(1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Smooth transition for lightbox image
  if (lightboxImg) {
    lightboxImg.style.transition = 'opacity 0.12s ease';
  }

  /* ----------------------------------------------------------
     SMOOTH SCROLL — anchor links
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
