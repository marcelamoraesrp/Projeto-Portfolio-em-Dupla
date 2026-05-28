const btnMobile = document.getElementById('btn-mobile');

const joaoclass = document.querySelectorAll('.joaoclass');
const marcelaclass = document.querySelectorAll('.marcelaclass');

const joaoImgRpg = document.getElementById('joaoImgRpg');
const marcelaImgRpg = document.getElementById('marcelaImgRpg');

const joaoImgFilmes = document.getElementById('joaoImgFilmes');
const marcelaImgFilmes = document.getElementById('marcelaImgFilmes');

const joaoImgSoftHard = document.getElementById('joaoImgSoftHard');
const marcelaImgSoftHard = document.getElementById('marcelaImgSoftHard');

const joaoImgCopa = document.getElementById('joaoImgCopa');
const marcelaImgCopa = document.getElementById('marcelaImgCopa');

const joaoImgNav = document.getElementById('joaoImgNav');
const marcelaImgNav = document.getElementById('marcelaImgNav');

let contagemcardRpg = 0;
let contagemcardFilmes = 0;
let contagemcardCalc = 0;
let contagemcardCopa = 0;
let contagemcardNav = 0;

let contagemquem = 0;

// Projetos do João

let joaoCardRpg = [
    "img/joao/rpg1.png",
    "img/joao/rpg2.png"
];

let joaoCardFilmes = [
    "img/joao/filmes1.png",
    "img/joao/filmes2.png",
    "img/joao/filmes3.png"
];

let joaoCardCalc = [
    "img/joao/calculadora1.png",
    "img/joao/calculadora2.png",
    "img/joao/calculadora3.png"
];

let joaoCardSoftHard = [
    "img/joao/softhard.png"
];

let joaoCardCopa = [
    "img/joao/copa1.png",
    "img/joao/copa2.png"
];

let joaoCardNav = [
    "img/joao/LoljaHome.png",
    "img/joao/LoljaMoletons.png",
    "img/joao/LoljaRegatas.png"
];

// Projetos da Marcela

let marcelaCardRpg = [
    "img/marcela/RPGvert.png",
    "img/marcela/RPGhori.png"
];

let marcelaCardFilmes = [
    "img/marcela/filmes1.png",
    "img/marcela/filmes2.png",
    "img/marcela/filmes3.png"
];

let marcelaCardCalc = [
    "img/marcela/calculadora1.png",
    "img/marcela/calculadora2.png",
    "img/marcela/calculadora3.png"
];

let marcelaCardSoftHard = [
    "img/marcela/SoftHard.png"
];

let marcelaCardNav = [
    "img/marcela/Navegacao1Marcela.png",
    "img/marcela/Navegacao2Marcela.png",
    "img/marcela/Navegacao3Marcela.png",
];

let marcelaCardCopa = [
    "img/marcela/copa1.png",
    "img/marcela/copa2.png"
];

joaoImgRpg.src = joaoCardRpg[0];
marcelaImgRpg.src = marcelaCardRpg[0];

marcelaImgFilmes.src = marcelaCardFilmes[0];
joaoImgFilmes.src = joaoCardFilmes[0];


joaoImgCalc.src = joaoCardCalc[0];
marcelaImgCalc.src = marcelaCardCalc[0];

joaoImgSoftHard.src = joaoCardSoftHard[0];
marcelaImgSoftHard.src = marcelaCardSoftHard[0];

joaoImgCopa.src = joaoCardCopa[0];
marcelaImgCopa.src = marcelaCardCopa[0];

joaoImgNav.src = joaoCardNav[0];
marcelaImgNav.src = marcelaCardNav[0];

joaoImgImgPicker.src = joaoCardImgPicker[0];
marcelaImgImgPicker.src = marcelaCardImgPicker[0];

// RPG

function projetoRpg() {
    if (contagemcardRpg == 0) {
        joaoImgRpg.src = joaoCardRpg[0];
        marcelaImgRpg.src = marcelaCardRpg[0];
        contagemcardRpg++;
    }
    else {
        joaoImgRpg.src = joaoCardRpg[1];
        marcelaImgRpg.src = marcelaCardRpg[1];
        contagemcardRpg++;
    }

    while (contagemcardRpg >= 2) {
        contagemcardRpg = 0
    }
}

projetoRpg()

// FILMES

function projetoFilmes() {
    if (contagemcardFilmes == 0) {
        joaoImgFilmes.src = joaoCardFilmes[0];
        marcelaImgFilmes.src = marcelaCardFilmes[0];
        contagemcardFilmes++;
    }
    else if (contagemcardFilmes == 1) {
        joaoImgFilmes.src = joaoCardFilmes[1];
        marcelaImgFilmes.src = marcelaCardFilmes[1];
        contagemcardFilmes++;
    }
    else {
        joaoImgFilmes.src = joaoCardFilmes[2];
        marcelaImgFilmes.src = marcelaCardFilmes[2];
        contagemcardFilmes++;
    }

    while (contagemcardFilmes >= 3) {
        contagemcardFilmes = 0
    }
}

projetoFilmes()

// CALCULADORA

function projetoCalc() {
    if (contagemcardCalc == 0) {
        joaoImgCalc.src = joaoCardCalc[0];
        marcelaImgCalc.src = marcelaCardCalc[0];
        contagemcardCalc++;
    }
    else if (contagemcardCalc == 1) {
        joaoImgCalc.src = joaoCardCalc[1];
        marcelaImgCalc.src = marcelaCardCalc[1];
        contagemcardCalc++;
    }
    else {
        joaoImgCalc.src = joaoCardCalc[2];
        marcelaImgCalc.src = marcelaCardCalc[2];
        contagemcardCalc++;
    }

    while (contagemcardCalc >= 3) {
        contagemcardCalc = 0
    }
}

projetoCalc()

// COPA

function projetoCopa() {
    if (contagemcardCopa == 1) {
        joaoImgCopa.src = joaoCardCopa[0];
        marcelaImgCopa.src = marcelaCardCopa[0];
        contagemcardCopa++;
    }

    else {
        joaoImgCopa.src = joaoCardCopa[1];
        marcelaImgCopa.src = marcelaCardCopa[1];
        contagemcardCopa++;
    }

    while (contagemcardCopa >= 2) {
        contagemcardCopa = 0
    }
}

// NAVEGAÇÃO

function projetoNav() {
    contagemcardNav++;
    if (contagemcardNav == 1) {
        joaoImgNav.src = joaoCardNav[1];
        marcelaImgNav.src = marcelaCardNav[1];
    }
    
    else if ( contagemcardNav == 2) {
        joaoImgNav.src = joaoCardNav[2];
        marcelaImgNav.src = marcelaCardNav[2];   
    }
    
    else {
        joaoImgNav.src = joaoCardNav[0];
        marcelaImgNav.src = marcelaCardNav[0];
    }
    
    while (contagemcardNav == marcelaCardNav.length) {
        contagemcardNav = 0;
        console.log(contagemcardNav);
    }
    console.log(contagemcardNav);
}

function toggleMenu() {
    const nav = document.getElementById('barra-nav');
    nav.classList.toggle('active');
}

function quem() {
    if (contagemquem == 0) {
        botao.textContent = "Mudar para Marcela";
        contagemquem++
    }
    else {
        botao.textContent = "Mudar para João";
        contagemquem++
    }
    while (contagemquem >= 2) {
        contagemquem = 0
    }
}

quem()

function vai() {
    joaoclass.forEach(item => {
        item.classList.toggle('Inativo');
    })

    marcelaclass.forEach(item => {
        item.classList.toggle('Inativo');
    })

    quem()
}

btnMobile.addEventListener('click', toggleMenu);
