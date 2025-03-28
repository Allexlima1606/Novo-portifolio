// Seleciona elementos frequentemente usados
const form = document.querySelector("form");
const section = document.querySelector("section");
const voltarTopoButton = document.getElementById("voltar-topo");
const loader = document.getElementById("loader");

// Função para abrir o formulário
function abrir() {
  if (form && section) {
    form.classList.add("form-visivel");
    section.classList.add("section-escurecida");
  }
}

// Função para fechar o formulário
function fechar() {
  if (form && section) {
    form.classList.remove("form-visivel");
    section.classList.remove("section-escurecida");
  }
}

// Função para rolar para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Exibe ou oculta o botão "voltar ao topo" com base no scroll
window.addEventListener("scroll", () => {
  if (voltarTopoButton) {
    if (window.scrollY > 1200) {
      voltarTopoButton.classList.add("show");
    } else {
      voltarTopoButton.classList.remove("show");
    }
  }
});

// Oculta o loader após o carregamento da página
window.addEventListener("load", () => {
  if (loader) {
    loader.style.display = "none";
  }
});

function abrirModal(imagem) {
  const modal = document.getElementById("modal");
  const imagemModal = document.getElementById("imagemModal");
  modal.style.display = "block";
  imagemModal.src = imagem.src;

  // Fecha o modal ao clicar fora da imagem
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      fecharModal();
    }
  });
}

function fecharModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
