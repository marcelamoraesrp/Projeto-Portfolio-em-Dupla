const botao = document.getElementById('botao');
const joaoclass = document.getElementById('joaoclass');
const marcelaclass = document.getElementById('marcelaclass');

let joaocard = 2;

function quem() {
    if (joaoclass.classList.contains('Inativo')) {
        botao.textContent = "Clique para ver os projetos do João";
    }
    else {
        botao.textContent = "Clique para ver os projetos da Marcela";
    }
}

quem()

function vai() {
    joaoclass.classList.toggle('Inativo');
    marcelaclass.classList.toggle('Inativo');
    quem()
}

botao.addEventListener('click', vai);
