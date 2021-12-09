//Carne- 400mg por pessoa, mais de 6h - 650mg
//Cerveja - 1.2 litro por pessoa, mais de 6h - 2 litros
//Refrigerente/água 1 litro por pessoa, mais de 6h - 1.5 litros
//crianças valem por 0.5 'pessoa

let adulto = document.querySelector('#adulto');
let crianca = document.querySelector('#crianca');
let duracao = document.querySelector('#duracao');
let btn = document.querySelector('#btn');
let divContent = document.querySelector('#formDiv')

btn.onclick = function() {
    let pessoas = parseFloat(adulto.value) + parseFloat((crianca.value / 2));
    let horas = parseFloat(duracao.value);  

    console.log(pessoas);
    console.log(horas);
    
    limparDados();
    calcCarne(horas, pessoas);
    calcCerveja(horas);
}

function limparDados(){
    let pTags = document.querySelectorAll('p');

    if(pTags.length = 0){
        return
    }else{
        for(i = 0; i < pTags.length; i++){
            divContent.removeChild(pTags[i]);
        }    
    }
}

function calcCarne(hr, pessoas){
    if(hr <= 6){
        let total = (pessoas * 0.40).toFixed(2);
        let pContent = document.createTextNode(`${total}kg de carne`);
        let pElement = document.createElement('p');
        pElement.appendChild(pContent);
        divContent.appendChild(pElement);
    }else{
        let total = (pessoas * 0.65).toFixed(2);
        let pContent = document.createTextNode(`${total}kg de carne`);
        let pElement = document.createElement('p');
        pElement.appendChild(pContent);
        divContent.appendChild(pElement);
    }
}

function calcCerveja(hr){
    if(hr <= 6){
        let total = 1.2 * (parseFloat(adulto.value)).toFixed(2);
        let pContent = document.createTextNode(`${total} litros de cerveja`);
        let pElement = document.createElement('p');
        pElement.appendChild(pContent);
        divContent.appendChild(pElement);
    }else{
        let total = 2 * (parseFloat(adulto.value)).toFixed(2);
        let pContent = document.createTextNode(`${total} litros de cerveja`);
        let pElement = document.createElement('p');
        pElement.appendChild(pContent);
        divContent.appendChild(pElement);
    }
}

function calcRefri(hr, pessoas){
    if(hr <= 6){
        let total = (pessoas * 1).toFixed(2);
        let pContent = document.createTextNode(`${total} litro(s) de refrigerante`);
        let pElement = document.createElement('p');
        pElement.appendChild(pContent);
        divContent.appendChild(pElement);
    }else{
        let total = (pessoas * 1.5).toFixed(2);
        let pContent = document.createTextNode(`${total} litro(s) de refrigerante`);
        let pElement = document.createElement('p');
        pElement.appendChild(pContent);
        divContent.appendChild(pElement);
    }
}