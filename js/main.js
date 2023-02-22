'use strict';

const euroKm = 0.21;

const btnGenera = document.getElementById('btn-genera');

btnGenera.addEventListener(
    'click',
    function(){
        let sconto = 0;
        const km = Number(document.getElementById('distanza').value);
        const etaUtente = document.getElementById('eta').value;
        const nomeUtente = document.getElementById('name').value;
        console.log(nomeUtente);
        console.log({km});
        console.log({etaUtente});
        let prezzoBiglietto = euroKm * km;
        console.log(`${prezzoBiglietto.toFixed(2)}€`);
        if(etaUtente === 'm'){
            prezzoBiglietto *= 0.8;
            sconto = 20;
        }else if(etaUtente  === 'V'){
            prezzoBiglietto *= 0.6;
            sconto = 40;
        }
        console.log(`Prezzo Scontato del ${sconto}%: ${prezzoBiglietto.toFixed(2)}€`);
    }
);




