// Mostrar / esconder o botão conforme o scroll
window.addEventListener("scroll", function () {
  const btn = document.getElementById("btnTop");
  if (!btn) return;

  if (window.scrollY > 300) {
    btn.style.display = "flex";   // aparece
  } else {
    btn.style.display = "none";   // some
  }
});

// Função chamada no onclick do botão
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
