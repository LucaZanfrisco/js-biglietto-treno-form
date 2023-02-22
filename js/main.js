'use strict';

const euroKm = 0.21;

const btnGenera = document.getElementById('btn-genera');
let etaUtente = document.getElementById('eta').value;
let km = Number(document.getElementById('distanza').value);

btnGenera.addEventListener(
    'click',
    function(){
        km = Number(document.getElementById('distanza').value);
        etaUtente = document.getElementById('eta').value;
        console.log({km});
        console.log({etaUtente});
    }
);

let prezzoBiglietto = euroKm * km;

console.log({prezzoBiglietto});
