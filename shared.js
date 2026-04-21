(function () {
  const LOGO_URL = 'https://assets.cdn.filesafe.space/tkg76Hzl5bn13DLfkZdI/media/698609b9c7e1ceb98d8533f2.png';

  const ARROW_SVG = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>`;

  // .nav-menu wraps nav-links + nav-cta so the mobile hamburger can
  // reveal BOTH the section links and the primary Apply CTA from a
  // single DOM source. On desktop .nav-menu uses `display: contents`
  // so the wrapper is layout-transparent — nav-links and nav-cta
  // remain direct flex children of .nav-inner.
  const NAV_HTML = `
    <header class="nav">
      <div class="container nav-inner">
        <a class="nav-brand" href="#top" aria-label="PatientEngines home">
          <img src="${LOGO_URL}" alt="PatientEngines" width="160" height="50">
        </a>
        <div class="nav-menu" id="nav-menu">
          <nav class="nav-links" aria-label="Primary">
            <a href="#problems">The problem</a>
            <a href="#engine">The engine</a>
            <a href="#services">Services</a>
            <a href="#results">Results</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div class="nav-cta">
            <a class="btn btn-ghost" href="handraiser.html">Take the quiz</a>
            <a class="btn btn-primary" href="#cta">
              Apply to work with us ${ARROW_SVG}
            </a>
          </div>
        </div>
        <button type="button" class="nav-toggle" aria-label="Open menu"
                aria-expanded="false" aria-controls="nav-menu">
          <span class="nav-toggle-line"></span>
          <span class="nav-toggle-line"></span>
          <span class="nav-toggle-line"></span>
        </button>
      </div>
    </header>`;

  const FOOTER_HTML = `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <img src="${LOGO_URL}" alt="PatientEngines" width="160" height="50">
        </div>
        <div class="footer-cols">
          <div>
            <div class="footer-h">Engine</div>
            <a href="#engine">Demand</a>
            <a href="#engine">Consult</a>
            <a href="#engine">Enrollment</a>
            <a href="#engine">Dashboard</a>
          </div>
          <div>
            <div class="footer-h">For</div>
            <a href="#problems">Med spa</a>
            <a href="#problems">Weight loss</a>
            <a href="#problems">HRT / TRT</a>
            <a href="#problems">IV &amp; wellness</a>
          </div>
          <div>
            <div class="footer-h">Company</div>
            <a href="#results">Results</a>
            <a href="#engine">Method</a>
            <a href="#cta">Contact</a>
          </div>
        </div>
      </div>
      <div class="container footer-fine">© 2026 PatientEngines · A growth partner for self-pay medicine</div>
    </footer>`;

  document.addEventListener('DOMContentLoaded', function () {
    var navEl = document.getElementById('site-nav');
    if (navEl) navEl.innerHTML = NAV_HTML;

    var footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;

    // Audit C1: mobile hamburger wiring.
    var nav = navEl ? navEl.querySelector('.nav') : null;
    var toggle = nav ? nav.querySelector('.nav-toggle') : null;
    var menu = nav ? nav.querySelector('#nav-menu') : null;
    if (nav && toggle && menu) {
      var setOpen = function (open) {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      };
      toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('is-open'));
      });
      // Close on in-menu link click
      menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      // Close on Escape — return focus to the toggle
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          setOpen(false);
          toggle.focus();
        }
      });
      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!nav.classList.contains('is-open')) return;
        if (e.target.closest('.nav')) return;
        setOpen(false);
      });
    }

    // Audit T7: lightweight scroll-spy — highlight the nav link
    // matching the section currently in view. Scoped to .nav-links so
    // the Apply CTA (now inside #nav-menu alongside the links) doesn't
    // collect aria-current on scroll.
    if (nav && 'IntersectionObserver' in window) {
      var sections = document.querySelectorAll('main section[id]');
      var navLinks = nav.querySelectorAll('.nav-links a[href^="#"]');
      if (sections.length && navLinks.length) {
        var spy = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var id = '#' + entry.target.id;
            navLinks.forEach(function (a) {
              if (a.getAttribute('href') === id) {
                a.setAttribute('aria-current', 'location');
              } else {
                a.removeAttribute('aria-current');
              }
            });
          });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(function (s) { spy.observe(s); });
      }
    }
  });
})();
