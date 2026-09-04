  // ─── NAV SCROLL SHADOW ───
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // ─── MOBILE MENU ───
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobile();
    }
  });

  // ─── SCROLL REVEAL ───
  const reveals = document.querySelectorAll('.reveal, .reveal-scale');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 120px 0px' });
  reveals.forEach(el => observer.observe(el));

  // ─── LIGHT PARALLAX (hero blobs) ───
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && parallaxEls.length) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        parallaxEls.forEach(el => {
          el.style.marginTop = (y * parseFloat(el.dataset.parallax)) + 'px';
        });
        ticking = false;
      });
    }, { passive: true });
  }

  // ─── FAQ ACCORDION ───
  function toggleFaq(trigger) {
    const item = trigger.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // ─── CAPTAÇÃO DE LEADS (FormSubmit) ───
  // Destino dos leads: token do FormSubmit vinculado à caixa da escola. O token
  // é feito para ficar no front-end — é justamente ele que mantém o endereço de
  // e-mail fora do código-fonte e do repositório público.
  //
  // Para trocar a caixa que recebe os leads, gere um token novo no FormSubmit e
  // substitua a constante abaixo; o resto do código não muda.
  const FORMSUBMIT_TOKEN = '52e64997ad0d46562c857240f6ca26fe';

  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const feedback = document.getElementById('leadFeedback');
      const btn = leadForm.querySelector('.lead-submit');
      const data = Object.fromEntries(new FormData(leadForm));

      if (!data.nome.trim() || !data.contato.trim()) {
        feedback.textContent = 'Preencha seu nome e um contato (WhatsApp ou e-mail).';
        return;
      }

      btn.disabled = true;
      const originalLabel = btn.textContent;
      btn.textContent = 'Enviando…';
      feedback.textContent = '';

      try {
        const res = await fetch('https://formsubmit.co/ajax/' + FORMSUBMIT_TOKEN, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            nome: data.nome,
            contato: data.contato,
            horario: data.horario?.trim() || 'não informado',
            _subject: 'Novo lead — site Fluency Garden',
            _honey: data._honey || ''
          })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        leadForm.reset();
        feedback.textContent = '✓ Recebido! Entraremos em contato com você em breve.';
      } catch (err) {
        feedback.textContent = 'Não foi possível enviar agora — fale direto pelo WhatsApp aqui embaixo.';
      } finally {
        btn.disabled = false;
        btn.textContent = originalLabel;
      }
    });
  }

  // ─── METODOLOGIA TIMELINE ───
  function toggleTimeline(trigger) {
    const item = trigger.closest('.tl-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.tl-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.tl-trigger').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }
