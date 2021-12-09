//Carne- 400mg por pessoa, mais de 6h - 650mg
//Cerveja - 1.2 litro por pessoa, mais de 6h - 2 litros
//Refrigerente/água 1 litro por pessoa, mais de 6h - 1.5 litros
//crianças valem por 0.5 'pessoa

let adulto = document.querySelector('#adulto');
let crianca = document.querySelector('#crianca');
let duracao = document.querySelector('#duracao');
let btn = document.querySelector('#btn');

btn.onclick = function() {
    let pessoas = (parseFloat(aultos.value) + parseFloat((crianca.value / 2))).toFixed(2);
    let horas = (parseFloat(duracao.value)).toFixed(2);  
    
}