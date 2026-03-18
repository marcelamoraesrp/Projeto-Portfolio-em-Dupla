const botao = document.getElementById("botao");

function vai() {
    document.body.classList.toggle("Ativo");
}

botao.addEventListener("click", vai());