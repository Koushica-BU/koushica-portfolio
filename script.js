/* =============================================
   KOUSHICA BU — PORTFOLIO SCRIPTS
   ============================================= */

// ── EMAIL — built at runtime so Cloudflare can never mangle it ──
// Split into parts so no plain email string exists in the source file.
(function injectEmails() {
  const u = 'koushica01';
  const d = 'gmail.com';
  const addr = u + '@' + d;
  const href = 'mailto:' + addr;

  const heroBtn    = document.getElementById('heroEmailBtn');
  const contactEl  = document.getElementById('contactEmail');
  const aboutEl    = document.getElementById('aboutEmail');

  if (heroBtn)   { heroBtn.href = href; }
  if (contactEl) { contactEl.href = href; contactEl.textContent = addr; }
  if (aboutEl)   { aboutEl.href  = href; aboutEl.textContent   = addr; }
})();


// ── RESUME DOWNLOAD ──
// Fetches the PDF as a blob and triggers a real download,
// bypassing the browser's tendency to open PDFs inline.
(function initResumeDownload() {
  const RESUME_PATH     = 'assets/resume/Koushica Bosadi Ulaganathan.pdf';
  const DOWNLOAD_NAME   = 'Koushica_Bosadi_Ulaganathan_Resume.pdf';

  document.querySelectorAll('[data-download-resume]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // swap text to show feedback
      const original = this.textContent;
      this.textContent = 'Downloading…';
      this.style.opacity = '.6';

      fetch(RESUME_PATH)
        .then(res => {
          if (!res.ok) throw new Error('File not found');
          return res.blob();
        })
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a   = document.createElement('a');
          a.href     = url;
          a.download = DOWNLOAD_NAME;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        })
        .catch(() => {
          // fallback — just open in new tab if fetch fails
          window.open(RESUME_PATH, '_blank');
        })
        .finally(() => {
          this.textContent  = original;
          this.style.opacity = '';
        });
    });
  });
})();



const root  = document.documentElement;
const knobs = [document.getElementById('knobDesktop'), document.getElementById('knobMobile')];

const SUN_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2" stroke-linecap="round">
  <circle cx="12" cy="12" r="4"/>
  <line x1="12" y1="2"  x2="12" y2="5"/>    <line x1="12" y1="19" x2="12" y2="22"/>
  <line x1="2"  y1="12" x2="5"  y2="12"/>   <line x1="19" y1="12" x2="22" y2="12"/>
  <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"/>
  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
  <line x1="19.78" y1="4.22"  x2="17.66" y2="6.34"/>
  <line x1="6.34"  y1="17.66" x2="4.22"  y2="19.78"/>
</svg>`;

const MOON_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--navy)" stroke-width="2" stroke-linecap="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>`;

function applyTheme(t) {
  root.setAttribute('data-theme', t);
  knobs.forEach(k => { if (k) k.innerHTML = t === 'dark' ? SUN_SVG : MOON_SVG; });
  localStorage.setItem('theme', t);
}
applyTheme(localStorage.getItem('theme') || 'light');

document.getElementById('themeToggleDesktop').addEventListener('click', () =>
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));
document.getElementById('themeToggleMobile').addEventListener('click', () =>
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'));


// ── PROFILE PHOTO ──
// Loads from assets/me.png
// shimmer skeleton → photo fades in on load → person icon on error
(function loadProfilePhoto() {
  const img  = document.getElementById('hcPhoto');
  const wrap = img && img.closest('.hc-photo-wrap');
  if (!img || !wrap) return;

  function onLoad()  { img.classList.add('loaded'); wrap.classList.add('loaded'); }
  function onError() { wrap.classList.add('error'); }

  img.addEventListener('load',  onLoad);
  img.addEventListener('error', onError);

  if (img.complete) {
    img.naturalWidth > 0 ? onLoad() : onError();
  }
})();


// ── MOBILE NAV ──
const hamburger    = document.getElementById('hamburger');
const drawer       = document.getElementById('navDrawer');
const mobileToggle = document.getElementById('themeToggleMobile');

function syncNav() {
  const mobile = window.innerWidth <= 900;
  mobileToggle.style.display = mobile ? 'flex' : 'none';
  if (!mobile) { drawer.classList.remove('open'); hamburger.classList.remove('open'); }
}
syncNav();
window.addEventListener('resize', syncNav);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  drawer.classList.toggle('open');
});
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  drawer.classList.remove('open');
  hamburger.classList.remove('open');
}));


// ── PROJECT CAROUSEL ──
// Reads PROJECTS from constants.js — to add a project just edit that file.
(function initCarousel() {
  const track   = document.getElementById('carouselTrack');
  const dotsEl  = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const curEl   = document.getElementById('carouselCurrent');
  const totEl   = document.getElementById('carouselTotal');

  if (!track || typeof PROJECTS === 'undefined') return;

  const total = PROJECTS.length;
  totEl.textContent = total;
  let current = 0;

  const IMG_FALLBACK = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    <span>Preview</span>`;

  // Build cards from PROJECTS constant
  PROJECTS.forEach((p, i) => {
    const MAX_TAGS = 4;
    const visibleTags = p.tags.slice(0, MAX_TAGS);
    const extraTags   = p.tags.slice(MAX_TAGS);
    const extraCount  = extraTags.length;

    const tags = visibleTags.map(t =>
      `<span class="ptag ${t.style}">${t.label}</span>`
    ).join('') + (extraCount > 0
      ? `<span class="ptag-more" data-tooltip="${extraTags.map(t => t.label).join(', ')}">+${extraCount} more</span>`
      : '');
    const githubBtn = p.github
      ? `<a href="${p.github}" class="project-link" target="_blank" rel="noopener">GitHub →</a>` : '';
    const demoBtn = p.demo
      ? `<a href="${p.demo}" class="project-link demo" target="_blank" rel="noopener">Live Demo ↗</a>` : '';

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-img-wrap loading">
        <img src="${p.image || ''}" alt="${p.title} preview" loading="lazy"/>
        <div class="project-img-fallback">${IMG_FALLBACK}</div>
      </div>
      <div class="project-body">
        <div class="project-tag-row">${tags}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-links-row">${githubBtn}${demoBtn}</div>
      </div>`;
    track.appendChild(card);

    const imgEl  = card.querySelector('.project-img-wrap img');
    const wrapEl = card.querySelector('.project-img-wrap');

    function onLoad()  { imgEl.classList.add('loaded');  wrapEl.classList.remove('loading'); }
    function onError() { wrapEl.classList.remove('loading'); wrapEl.classList.add('error'); }

    if (p.image) {
      imgEl.addEventListener('load',  onLoad);
      imgEl.addEventListener('error', onError);
      if (imgEl.complete) { imgEl.naturalWidth > 0 ? onLoad() : onError(); }
    } else {
      wrapEl.classList.remove('loading');
      wrapEl.classList.add('error');
    }
  });

  function visibleCount() { return window.innerWidth <= 900 ? 1 : 2; }

  function cardWidth() {
    const card = track.querySelector('.project-card');
    if (!card) return 0;
    return card.offsetWidth + (parseFloat(getComputedStyle(track).gap) || 0);
  }

  let lastTotalPages = 0;

  function buildDots(totalPages) {
    dotsEl.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      dot.addEventListener('click', () => goTo(i * visibleCount()));
      dotsEl.appendChild(dot);
    }
    lastTotalPages = totalPages;
  }

  function updateCarousel() {
    const vis    = visibleCount();
    const maxIdx = Math.max(0, total - vis);
    current = Math.min(current, maxIdx);

    track.style.transform = `translateX(-${current * cardWidth()}px)`;

    const totalPages  = Math.ceil(total / vis);
    const currentPage = Math.floor(current / vis);
    curEl.textContent = currentPage + 1;
    totEl.textContent = totalPages;

    if (totalPages !== lastTotalPages) buildDots(totalPages);

    dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === currentPage));

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= maxIdx;
  }

  function goTo(idx) {
    const maxIdx = Math.max(0, total - visibleCount());
    current = Math.max(0, Math.min(idx, maxIdx));
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => goTo(current - visibleCount()));
  nextBtn.addEventListener('click', () => goTo(current + visibleCount()));
  window.addEventListener('resize', updateCarousel);

  // rAF ensures cards are in the DOM and have dimensions before we calculate
  requestAnimationFrame(updateCarousel);
})();



// ── SCROLL REVEAL ──
const revealObs = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    e.target.querySelectorAll('.trait-card, .stack-card, .metric, .panel-row').forEach((c, i) => {
      c.style.opacity = '0'; c.style.transform = 'translateY(20px)';
      setTimeout(() => {
        c.style.transition = 'opacity .5s ease, transform .5s ease';
        c.style.opacity = '1'; c.style.transform = 'none';
      }, 80 + i * 65);
    });
    obs.unobserve(e.target);
  });
}, { threshold: .1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


// ── TECH STACK TOOLTIP ──
// CSS ::after can't escape carousel's overflow:hidden, so we drive this via JS.
(function initStackTooltip() {
  const tip = document.createElement('div');
  tip.id = 'stack-tooltip';
  document.body.appendChild(tip);

  let hideTimer;

  document.addEventListener('mouseenter', e => {
    const el = e.target.closest('.ptag-more');
    if (!el) return;
    clearTimeout(hideTimer);
    tip.classList.remove('visible');
    tip.textContent = el.dataset.tooltip || '';
    // wait one frame so the browser lays out the new text before we measure
    requestAnimationFrame(() => {
      positionTip(el);
      tip.classList.add('visible');
    });
  }, true);

  document.addEventListener('mouseleave', e => {
    if (!e.target.closest('.ptag-more')) return;
    hideTimer = setTimeout(() => tip.classList.remove('visible'), 100);
  }, true);

  function positionTip(el) {
    const r    = el.getBoundingClientRect();
    const card = el.closest('.project-card');
    const cr   = card ? card.getBoundingClientRect() : { left: 0, right: window.innerWidth };

    const tw = tip.offsetWidth;
    const th = tip.offsetHeight;
    const buttonCenterX = r.left + r.width / 2;
    let left = buttonCenterX - tw / 2;
    left = Math.max(cr.left, Math.min(left, cr.right - tw));
    tip.style.left = left + 'px';
    tip.style.top  = (r.top - th - 10) + 'px';
    // keep arrow pointing at the button regardless of clamping
    tip.style.setProperty('--arrow-left', (buttonCenterX - left) + 'px');
  }
})();