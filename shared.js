(function () {
  const LOGO_SVG = `
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" stroke-width="1"/>
      <path d="M6 20 Q 10 9, 14 20 T 22 20" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="22" cy="20" r="2" fill="currentColor"/>
    </svg>`;

  const FOOTER_LOGO_SVG = LOGO_SVG.replace('width="26" height="26"', 'width="22" height="22"');

  const ARROW_SVG = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>`;

  const NAV_HTML = `
    <header class="nav">
      <div class="container nav-inner">
        <a class="nav-brand" href="#top" aria-label="PatientEngines home">
          ${LOGO_SVG}
          <span class="brand-word">Patient<em>Engines</em></span>
        </a>
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
    </header>`;

  const FOOTER_HTML = `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          ${FOOTER_LOGO_SVG}
          <span class="brand-word">PatientEngines</span>
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
  });
})();
