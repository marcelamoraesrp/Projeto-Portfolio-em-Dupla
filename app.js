const botao = document.getElementById('botao');
const btnMobile = document.getElementById('btn-mobile');
const joaoclass = document.getElementById('joaoclass');
const marcelaclass = document.getElementById('marcelaclass');

let joaocard = 2;

function toggleMenu(){
    const nav = document.getElementById('barra-nav');
    nav.classList.toggle('active');
}

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

btnMobile.addEventListener('click', toggleMenu)
botao.addEventListener('click', vai);
