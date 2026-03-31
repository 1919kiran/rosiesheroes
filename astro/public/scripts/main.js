/* ============================================================
   ROSIE'S HEROES — main.js
   Vanilla JS for the Astro site. No jQuery, no dependencies.
   Targets semantic IDs and data-reveal attributes set in .astro
   components.

   Sections:
     1. Smooth Scroll Navigation
     2. Scroll Reveal (IntersectionObserver)
     3. Parallax (rAF-throttled scroll)
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     UTILITY
     ---------------------------------------------------------- */

  /** Returns true if the element's bounding box overlaps the viewport. */
  function inViewport(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  /* ----------------------------------------------------------
     1. SMOOTH SCROLL NAVIGATION
     Intercepts every <a href="#…"> on the page — covers nav
     dropdown links, CTA buttons ("Happy Tails", "Contact Us"),
     and any other anchor link.
     Uses the sticky header height so the target section isn't
     hidden beneath the nav.
     ---------------------------------------------------------- */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var hash = a.getAttribute('href');
        if (!hash || hash === '#') return;          /* bare # — do nothing */

        var id = hash.slice(1);
        var target = document.getElementById(id);
        if (!target) return;                         /* anchor not on page */

        e.preventDefault();

        var header = document.getElementById('site-header');
        var headerH = header ? header.offsetHeight : 97;
        var top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;

        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ----------------------------------------------------------
     2. SCROLL REVEAL
     Elements declare their animation type via a data-reveal
     attribute:

       data-reveal            → slide-up fade  (.reveal)
       data-reveal="card"     → spring pop     (.reveal-card) + stagger
       data-reveal="fade"     → opacity only   (.reveal-fade)

     Elements already in the viewport on load get .visible
     immediately (no flash). All others are observed and get
     .visible once they cross the threshold.
     ---------------------------------------------------------- */

  function initScrollReveal() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -32px 0px'
    });

    /* Helper: add class, mark visible immediately if on-screen,
       otherwise queue for observation. */
    function register(el, cls) {
      el.classList.add(cls);
      if (inViewport(el)) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    }

    /* data-reveal (no value) → slide-up fade */
    document.querySelectorAll(
      '[data-reveal]:not([data-reveal="card"]):not([data-reveal="fade"])'
    ).forEach(function (el) {
      register(el, 'reveal');
    });

    /* data-reveal="card" → spring pop, staggered within each section */
    document.querySelectorAll('section').forEach(function (section) {
      section.querySelectorAll('[data-reveal="card"]').forEach(function (card, i) {
        card.style.transitionDelay = (i * 0.1) + 's';
        register(card, 'reveal-card');
      });
    });

    /* data-reveal="fade" → opacity only */
    document.querySelectorAll('[data-reveal="fade"]').forEach(function (el) {
      register(el, 'reveal-fade');
    });
  }

  /* ----------------------------------------------------------
     3. PARALLAX
     Four elements, each driven by a normalised scroll progress
     value t ∈ [0, 1]:

       t = (viewportCenter − elementCenter) / viewportHeight

     Clamped so elements stop at the edges of the formula range.

     #beagle-running  → horizontal slide   translateX(-t * 300px)
     #puppy-lying     → horizontal slide   translateX(-t * 380px)
     #ball-tennis     → horizontal slide   translateX(-t * 530px)
                        (runs ahead of the puppy)
     #airplane        → parabolic arc
                        x   = 100 − t * 1400
                        y   = 404 * t * (t − 1)
                        rot = (t − 0.5) * 14 deg

     rAF throttling keeps the handler off the main thread.
     Scroll listener is passive for better scroll performance.
     overflow:visible on the containing sections is set in CSS.
     ---------------------------------------------------------- */

  function initParallax() {
    var beagle = document.getElementById('beagle-running');
    var puppy  = document.getElementById('puppy-lying');
    var ball   = document.getElementById('ball-tennis');
    var plane  = document.getElementById('airplane');

    /* If none of the parallax elements exist, bail early. */
    if (!beagle && !puppy && !ball && !plane) return;

    /**
     * Normalised progress for a single element.
     * Returns a value in [0, 1]:
     *   0 = element centre at viewport bottom
     *   1 = element centre at viewport top
     */
    function getProgress(el) {
      var rect   = el.getBoundingClientRect();
      var center = rect.top + rect.height / 2;
      var vh     = window.innerHeight;
      var raw    = (vh - center) / vh;
      return Math.max(0, Math.min(1, raw));
    }

    var ticking = false;

    function animate() {
      if (beagle) {
        var t = getProgress(beagle);
        beagle.style.transform = 'translateX(' + (-t * 300) + 'px)';
      }

      if (puppy) {
        var t = getProgress(puppy);
        puppy.style.transform = 'translateX(' + (-t * 380) + 'px)';
      }

      if (ball) {
        var t = getProgress(ball);
        ball.style.transform = 'translateX(' + (-t * 530) + 'px)';
      }

      if (plane) {
        /* Airplane uses section-relative t so it flies in briefly as
           #vision enters the viewport, then disappears — matching the
           original one-shot motion effect.
           t=0: vision top at viewport bottom (section just entering)
           t=1: vision bottom at viewport top (section fully scrolled past) */
        var vision = document.getElementById('vision');
        if (vision) {
          var vRect = vision.getBoundingClientRect();
          var vH    = vision.offsetHeight;
          var vh    = window.innerHeight;
          var raw   = (vh - vRect.top) / (vh + vH);
          var t     = Math.max(0, Math.min(1, raw));

          /* Visible window: t 0.02 → 0.38 — fly-through before Vision
             content is fully readable at top of viewport */
          var visStart = 0.02, visEnd = 0.38;
          if (t < visStart || t > visEnd) {
            plane.style.opacity = '0';
          } else {
            var lt  = (t - visStart) / (visEnd - visStart); /* local 0→1 */
            var x   = 100 - lt * 1500;
            var y   = 200 * lt * (lt - 1);
            var deg = (lt - 0.5) * 12;
            plane.style.opacity   = '1';
            plane.style.transform =
              'translateX(' + x + 'px) translateY(' + y + 'px) rotate(' + deg + 'deg)';
          }
        }
      }


      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(animate);
        ticking = true;
      }
    }, { passive: true });

    /* Set initial positions without waiting for a scroll event. */
    animate();
  }

  /* ----------------------------------------------------------
     INIT
     Run after the DOM is ready. If the script is deferred or
     placed at the end of <body> the document will already be
     interactive; the DOMContentLoaded guard handles both cases.
     ---------------------------------------------------------- */

  function init() {
    initSmoothScroll();
    initScrollReveal();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
