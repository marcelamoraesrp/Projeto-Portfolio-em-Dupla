const botao = document.getElementById('botao');
const joaoclass = document.getElementById('joaoclass');
const marcelaclass = document.getElementById('marcelaclass');

let joaocard = 2;

function quem() {
    if (joaoclass.classList.contains('Inativo')) {
        botao.textContent = "João";
    }
    else {
        botao.textContent = "Marcela";
    }
}

quem()

function vai() {
    joaoclass.classList.toggle('Inativo');
    marcelaclass.classList.toggle('Inativo');
    quem()
}

botao.addEventListener('click', vai);
