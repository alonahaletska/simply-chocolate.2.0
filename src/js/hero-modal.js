(() => {
  const refsHero = {
    openModalBtn: document.querySelectorAll('[data-hero-modal-open]'),
    closeModalBtn: document.querySelector('[data-hero-modal-close]'),
    modal: document.querySelector('[data-hero-modal]'),
  };

  refsHero.openModalBtn.forEach(button => {
    button.addEventListener('click', toggleModal);
  });
  refsHero.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refsHero.modal.classList.toggle('is-hidden');
  }
})();