document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  // Mostra/esconde o botão ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  // Clique: volta pro topo suave
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
