const btnMobile = document.getElementById('btn-mobile');

const joaoclass = document.getElementById('joaoclass');
const marcelaclass = document.getElementById('marcelaclass');

const joaoimg = document.getElementById('joaoimg');
const marcelaimg = document.getElementById('marcelaimg');


let contagemcard = 0;
let contagemquem = 0;

let joaocard = [
    "img/joao/rpg1.png",
    "img/joao/rpg2.png"
];



let marcelacard = [
    "img/marcela/RPGvert.png",
    "img/marcela/RPGhori.png"

];

joaoimg.src = joaocard[0];
marcelaimg.src = marcelacard[0];

function projeto() {
    if (contagemcard == 1) {
        joaoimg.src = joaocard[0];
        marcelaimg.src = marcelacard[0];
        contagemcard++;
    }
    else {
        joaoimg.src = joaocard[1];
        marcelaimg.src = marcelacard[1];
        contagemcard++;
    }

    while (contagemcard >= 2) {
        contagemcard = 0
    }

    console.log("contagem card " + contagemcard);

}


function toggleMenu() {
    const nav = document.getElementById('barra-nav');
    nav.classList.toggle('active');

}

function quem() {
    if (contagemquem == 0) {
        botao.textContent = "Mudar para João";
        contagemquem++
    }
    else {
        botao.textContent = "Mudar para Marcela";
        contagemquem++
    }
    while (contagemquem >= 2) {
        contagemquem = 0
    }
    console.log("contagem quem " + contagemquem)
    console.log("contagem card " + contagemcard);
}

quem()

function vai() {
    joaoclass.classList.toggle('Inativo');
    marcelaclass.classList.toggle('Inativo');
    quem()
}

btnMobile.addEventListener('click', toggleMenu);
