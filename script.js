let svetlije = document.querySelector('#svetlije');
let tamnije = document.querySelector('#tamnije')
let btn1 = document.querySelector('#sa-u-dugme');
let btn2 = document.querySelector('#bez-u-dugme')
let saU = document.querySelector('#sa-u');
let bezU = document.querySelector('#bez-u');
let ppBez = document.querySelector('#ponuda-paketa');
let ppSa = document.querySelector('#ponuda-paketa2');


//  SA UREDJAJEM - BEZ UREDJAJA DUGMICI

btn1.addEventListener('click', prikazati1);
function prikazati1() {
    svetlije.style.backgroundColor = '#DA2A1C';
    tamnije.style.backgroundColor = '#D7D7D7';
    saU.style.fontWeight = 'bold';
    bezU.style.fontWeight = 'normal';
    ppBez.style.display = 'none';
    ppSa.style.display = 'grid';

};

btn2.addEventListener('click', prikazati2);
function prikazati2() {
    svetlije.style.backgroundColor = '#D7D7D7';
    tamnije.style.backgroundColor = '#DA2A1C';
    saU.style.fontWeight = 'normal';
    bezU.style.fontWeight = 'bold';
    ppBez.style.display = 'grid';
    ppSa.style.display = 'none';
};


//  STRELICE LEVO I DESNO

let strelicaLevo = document.querySelector('#strelica-levo');
let strelicaDesno = document.querySelector('#strelica-desno');
let karticaJedan = document.querySelector('#tri-kartice-kartica1');
let karticaTri = document.querySelector('#tri-kartice-kartica3');


strelicaLevo.addEventListener('click', prikazati3);
function prikazati3() {
    karticaTri.style.display = 'none';
    karticaJedan.style.display = 'grid';
}
strelicaDesno.addEventListener('click', prikazati4);
function prikazati4() {
    karticaJedan.style.display = 'none';
    karticaTri.style.display = 'grid';
}

// SEKCIJA KRETANJA SLIKE

let strelicaD = document.querySelector('#dve-slike-strelica-desno');
let strelicaL = document.querySelector('#dve-slike-strelica-levo');
let sekcijaL = document.querySelector('#dve-slike');
let sekcijaD = document.querySelector('#dve-slike2');
let animacijaStreliceL = document.querySelector('#dve-slike-strelica-levo-slika');
let animacijaStreliceD = document.querySelector('#dve-slike-strelica-desno-slika');


// strelicaD.addEventListener('click', prebaciSekciju);
// function prebaciSekciju(e) {
//     e.preventDefault();
//     sekcijaL.style.display = 'none';
//     sekcijaL.style.animationName = 'fadeOut';
//     sekcijaL.style.animationDuration = '2s';
//     sekcijaD.style.display = 'grid';
//     sekcijaD.style.animationName = 'fadeIn';
//     sekcijaD.style.animationDuration = '2s';
//     animacijaStreliceD.style.display = 'none';
//     animacijaStreliceL.style.display = 'grid';
//     strelicaL.style.display = 'grid';
// }

// strelicaL.addEventListener('click', prebaciSekciju2);
// function prebaciSekciju2(e2) {
//     e2.preventDefault();
//     sekcijaL.style.display = 'grid';
//     sekcijaL.style.animationName = 'fadeIn';
//     sekcijaL.style.animationDuration = '2s';
//     sekcijaD.style.display = 'none';
//     sekcijaD.style.animationName = 'fadeOut';
//     sekcijaD.style.animationDuration = '2s';
//     animacijaStreliceD.style.display = 'grid';
//     animacijaStreliceL.style.display = 'none';
//     strelicaL.style.display = 'none';
//     strelicaD.style.display = 'grid';

// }
// test
var splide = new Splide('.splide', {
    type: 'fade',
});
splide.mount();