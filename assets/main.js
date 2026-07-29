(function () {
  const nav = document.getElementById('nav');
  const darkHero = document.querySelector('.dark-hero');

  function updateNav() {
    const scrolled = window.scrollY > 40;
    nav.classList.toggle('scrolled', scrolled);
    if (darkHero) {
      const r = darkHero.getBoundingClientRect();
      const overHero = r.top <= 64 && r.bottom > 64;
      nav.classList.toggle('over-hero', overHero);
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.anim, .anim-scale').forEach((el) => revealObs.observe(el));

  const form = document.getElementById('contact-form');
  if (form) {
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;
      errorEl.style.display = 'none';
      try {
        const res = await fetch('https://formspree.io/f/mrednkkv', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.style.display = 'none';
          successEl.style.display = 'block';
        } else {
          errorEl.style.display = 'block';
          submitBtn.textContent = 'Send Message →';
          submitBtn.disabled = false;
        }
      } catch {
        errorEl.style.display = 'block';
        submitBtn.textContent = 'Send Message →';
        submitBtn.disabled = false;
      }
    });
  }

  const splash = document.getElementById('splash');
  if (splash) {
    const words = ['Grow.', 'Manage.', 'Expand.'];
    const row = document.getElementById('spWordmark');
    const T0 = 1.4, GAP = 0.16;
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.className = 'sp-word' + (i === words.length - 1 ? ' acc' : '');
      span.textContent = w;
      span.style.animationDelay = (T0 + i * GAP) + 's';
      row.appendChild(span);
    });
    document.body.classList.add('splash-open');
    const exitAt = (T0 + words.length * GAP + 0.9) * 1000;
    setTimeout(() => {
      splash.classList.add('exit');
      document.body.classList.remove('splash-open');
      setTimeout(() => splash.remove(), 800);
    }, exitAt);
  }
})();
