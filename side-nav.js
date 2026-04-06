(() => {
  const pages = [
    { title: 'Início', href: 'index.html' },
    { title: 'Sobre', href: 'sobre.html' },
    { title: 'Serviços', href: 'servicos.html' },
    { title: 'Fotos', href: 'fotos.html' },
    { title: 'Equipe', href: 'equipe.html' },
    { title: 'Atendimento', href: 'atendimento.html' },
    { title: 'Contato', href: 'contato.html' }
  ];

  const getCurrentIndex = () => {
    const path = window.location.pathname.toLowerCase();
    const matchIndex = pages.findIndex((page) => path.endsWith(page.href));
    return matchIndex === -1 ? 0 : matchIndex;
  };

  const prevBtn = document.querySelector('.side-nav__btn--prev');
  const nextBtn = document.querySelector('.side-nav__btn--next');

  if (!prevBtn || !nextBtn) {
    return;
  }

  const currentIndex = getCurrentIndex();
  const prevPage = pages[currentIndex - 1] || null;
  const nextPage = pages[currentIndex + 1] || null;

  const setButton = (btn, page, direction) => {
    const label = btn.querySelector('.side-nav__label');
    if (!page) {
      btn.classList.add('is-hidden');
      btn.setAttribute('aria-hidden', 'true');
      btn.setAttribute('tabindex', '-1');
      return;
    }
    btn.classList.remove('is-hidden');
    btn.removeAttribute('aria-hidden');
    btn.removeAttribute('tabindex');
    btn.setAttribute('href', page.href);
    btn.setAttribute('aria-label', `${direction} ${page.title}`);
    if (label) {
      label.textContent = page.title;
    }
  };

  setButton(prevBtn, prevPage, 'Página anterior:');
  setButton(nextBtn, nextPage, 'Próxima página:');
})();
