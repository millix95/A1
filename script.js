let svetlije = document.querySelector('#svetlije');
let tamnije = document.querySelector('#tamnije')
let btn1 = document.querySelector('#sa-u-dugme');
let btn2 = document.querySelector('#bez-u-dugme')
let saU = document.querySelector('#sa-u');
let bezU = document.querySelector('#bez-u');
let ppBez = document.querySelector('#ponuda-paketa');
let ppSa = document.querySelector('#ponuda-paketa2');



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