// Momentum — Shared Navigation & Footer
(function () {
  const PATH = (function () {
    const d = document.documentElement.dataset.root;
    return d || '';
  })();

  const NAV_HTML = `
  <header class="nav" id="nav">
    <div class="nav-inner">
      <a href="${PATH}index.html" class="nav-logo">Momentum<span>.</span></a>
      <ul class="nav-center">
        <li><a href="${PATH}products/personal.html">Products</a></li>
        <li><a href="${PATH}index.html#features">Features</a></li>
        <li><a href="${PATH}solutions/enterprise.html">Enterprise</a></li>
        <li><a href="${PATH}index.html#integrations">Integrations</a></li>
        <li><a href="${PATH}index.html#pricing">Pricing</a></li>
      </ul>
      <div class="nav-right">
        <a href="${PATH}resources/docs.html">Docs</a>
        <a href="${PATH}index.html#waitlist" class="btn btn-primary btn-sm">Get Early Access</a>
      </div>
      <button class="nav-hamburger" onclick="document.getElementById('mobileNav').classList.add('open')" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-nav" id="mobileNav">
    <button class="mobile-nav-close" onclick="this.parentElement.classList.remove('open')" aria-label="Close">&times;</button>
    <a href="${PATH}products/personal.html" onclick="this.parentElement.classList.remove('open')">Products</a>
    <a href="${PATH}index.html#features" onclick="this.parentElement.classList.remove('open')">Features</a>
    <a href="${PATH}solutions/enterprise.html" onclick="this.parentElement.classList.remove('open')">Enterprise</a>
    <a href="${PATH}index.html#integrations" onclick="this.parentElement.classList.remove('open')">Integrations</a>
    <a href="${PATH}index.html#pricing" onclick="this.parentElement.classList.remove('open')">Pricing</a>
    <a href="${PATH}resources/docs.html" onclick="this.parentElement.classList.remove('open')">Documentation</a>
    <a href="${PATH}index.html#waitlist" class="btn btn-primary" onclick="this.parentElement.classList.remove('open')">Get Early Access</a>
  </div>`;

  const FOOTER_HTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-brand-name">Momentum<span>.</span></div>
          <p class="footer-brand-desc">Shared meeting hardware that transcribes on-device and gives everyone the transcript. Designed in New York City.</p>
          <div class="footer-social">
            <a href="#" aria-label="Twitter">X</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">GH</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="${PATH}products/personal.html">Momentum Personal</a></li>
            <li><a href="${PATH}products/conference.html">Momentum Conference</a></li>
            <li><a href="${PATH}products/app.html">Mobile App</a></li>
            <li><a href="${PATH}products/compare.html">Compare Devices</a></li>
            <li><a href="${PATH}products/accessories.html">Accessories</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="${PATH}resources/docs.html">Documentation</a></li>
            <li><a href="${PATH}resources/help.html">Help & Support</a></li>
            <li><a href="${PATH}solutions/customer-stories.html">Customer Stories</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="${PATH}company/careers.html">Careers <span class="badge">Hiring</span></a></li>
            <li><a href="${PATH}solutions/enterprise.html">Enterprise</a></li>
            <li><a href="${PATH}legal/privacy.html">Privacy</a></li>
            <li><a href="${PATH}legal/terms.html">Terms</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-left">&copy; 2026 Momentum Technologies, Inc. All rights reserved.</div>
        <div class="footer-bottom-right">
          <a href="${PATH}legal/privacy.html">Privacy</a>
          <a href="${PATH}legal/terms.html">Terms</a>
          <a href="${PATH}legal/security.html">Security</a>
        </div>
      </div>
    </div>
  </footer>`;

  // Inject nav
  const navTarget = document.getElementById('shared-nav');
  if (navTarget) navTarget.outerHTML = NAV_HTML;

  // Inject footer
  const footerTarget = document.getElementById('shared-footer');
  if (footerTarget) footerTarget.outerHTML = FOOTER_HTML;

  // Scroll reveal
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal').forEach(el => {
    if (reduced) el.classList.add('visible'); else obs.observe(el);
  });

  // Nav scroll
  const nav = document.getElementById('nav');
  if (nav) {
    let t = false;
    window.addEventListener('scroll', () => {
      if (!t) {
        requestAnimationFrame(() => { nav.classList.toggle('scrolled', window.scrollY > 60); t = false; });
        t = true;
      }
    });
  }
})();
