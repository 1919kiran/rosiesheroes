// === Nav Smooth Scroll ===

(function() {
  /* Map nav label text → section element ID */
  var navMap = {
    'vision':           'comp-mn20omgs',
    "rosie's story":    'comp-mmbdi1sv',
    'our roadmap':      'comp-mn20pyl4',
    'impact multiplier':'comp-mn2eta3o',
    'adopt':            'comp-mn20rtti',
    'volunteering':     'comp-mn20sflf',
    'donate':           'comp-mn20t0hw',
    'partner':          'comp-mn20tgsw',
    'contact us':       'comp-mn20uycd'
  };

  function scrollToSection(targetId) {
    var el = document.getElementById(targetId);
    if (!el) return;
    var headerH = (document.getElementById('SITE_HEADER') || {}).offsetHeight || 80;
    var top = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  function handleNavClick(e) {
    var anchor = e.currentTarget;
    var label = anchor.textContent.trim().toLowerCase();
    var targetId = navMap[label];
    if (targetId) {
      e.preventDefault();
      scrollToSection(targetId);
      /* close any open dropdown */
      document.querySelectorAll('.itemDepth02233374943__itemWrapper[data-shown]').forEach(function(li) {
        li.removeAttribute('data-hovered');
        li.removeAttribute('data-shown');
      });
    }
  }

  function initScrollNav() {
    /* wire all nav sub-item links */
    document.querySelectorAll(
      '.itemDepth12472627565__root, [data-anchor], .uDW_Qe.wixui-button'
    ).forEach(function(a) {
      a.addEventListener('click', handleNavClick);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollNav);
  } else {
    initScrollNav();
  }
})();

// === Nav Dropdown Hover ===

(function() {
  function initNav() {
    document.querySelectorAll('.itemDepth02233374943__itemWrapper').forEach(function(li) {
      li.addEventListener('mouseenter', function() {
        this.setAttribute('data-hovered', '');
        this.setAttribute('data-shown', '');
      });
      li.addEventListener('mouseleave', function() {
        this.removeAttribute('data-hovered');
        this.removeAttribute('data-shown');
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();

// === Parallax Overflow Fix ===

(function() {
  function fixOverflow(el, levels) {
    var node = el;
    for (var i = 0; i < levels; i++) {
      if (!node || !node.parentElement) break;
      node = node.parentElement;
      node.style.overflow = 'visible';
    }
  }

  function getProgress(el) {
    var rect = el.getBoundingClientRect();
    var center = rect.top + rect.height / 2;
    var vh = window.innerHeight;
    var raw = (vh - center) / vh;
    return Math.max(0, Math.min(1, raw));
  }

  var beagle  = document.getElementById('img_comp-mmqpdwio');
  var puppy   = document.getElementById('img_comp-mn20omi2');
  var plane   = document.getElementById('img_comp-mn20sflu1');
  var ball    = document.querySelector('img[src*="bc5f57_d261a57f22ce4b74835e4752af9acfde"]');

  if (beagle) fixOverflow(beagle, 6);
  if (puppy)  fixOverflow(puppy,  6);
  if (plane)  fixOverflow(plane,  6);
  if (ball)   fixOverflow(ball,   6);

  var ticking = false;

  function animate() {
    if (beagle) {
      var t = getProgress(beagle);
      /* slide right (negate: parent has flipped coords) */
      beagle.style.transform = 'translateX(' + (-t * 300) + 'px)';
    }

    if (puppy) {
      var t = getProgress(puppy);
      /* slide right, chasing ball (negate: parent has flipped coords) */
      puppy.style.transform = 'translateX(' + (-t * 380) + 'px)';
    }

    if (ball) {
      var t = getProgress(ball);
      /* ball runs ahead of the puppy to the right */
      ball.style.transform = 'translateX(' + (-t * 530) + 'px)';
    }

    if (plane) {
      var t = getProgress(plane);
      /* parabolic arc: x 800→-600, y peaks -101px at t=0.5 */
      var x = 100 - t * 1400;
      var y = 404 * t * (t - 1);
      var deg = (t - 0.5) * 14;
      plane.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px) rotate(' + deg + 'deg)';
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(animate);
      ticking = true;
    }
  }, { passive: true });

  /* run once on load */
  animate();
})();

// === Scroll Reveal Animations ===

(function() {
  /* IDs already forced to opacity:1 — skip them to avoid conflict */
  var skipIds = new Set([
    'comp-mmgszl2s', 'comp-mmbdj2qz', 'comp-mnbal80o',
    'comp-mn20rttp4', 'comp-mn20rtu04', 'comp-mn20sfll', 'comp-mn20sflm5'
  ]);

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  function inViewport(el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  function init() {
    /* Rich text blocks: fade up — skip header and footer */
    document.querySelectorAll(
      '[data-mesh-id$="inlineContent-gridContainer"] > [data-testid="richTextElement"]'
    ).forEach(function(el) {
      if (skipIds.has(el.id)) return;
      if (el.closest('#SITE_HEADER, #SITE_FOOTER')) return;
      el.classList.add('reveal');
      if (inViewport(el)) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });

    /* Cards: spring pop-in, staggered within each section (skip footer) */
    document.querySelectorAll('.wixui-section').forEach(function(section) {
      if (section.closest('#SITE_FOOTER')) return;
      section.querySelectorAll('.KaEeLN').forEach(function(card, i) {
        card.classList.add('reveal-card');
        card.style.transitionDelay = (i * 0.1) + 's';
        if (inViewport(card)) {
          card.classList.add('visible');
        } else {
          observer.observe(card);
        }
      });
    });

    /* Images: fade only — skip header (logo must never flash) */
    document.querySelectorAll('.wixui-image').forEach(function(img) {
      if (img.closest('#SITE_HEADER, #SITE_FOOTER')) return;
      img.classList.add('reveal-fade');
      if (inViewport(img)) {
        img.classList.add('visible');
      } else {
        observer.observe(img);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
