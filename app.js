const botao = document.getElementById('botao');

function vai() {
    const joao = document.getElementById('joao');
    joao.classList.toggle('Inativo');
    const marcela = document.getElementById('marcela');
    marcela.classList.toggle('Inativo');
}

botao.addEventListener('click', vai);
