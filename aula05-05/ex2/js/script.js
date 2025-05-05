import GeradorNumeros from './GeradorNumeros.js';

document.addEventListener("DOMContentLoaded", () => {
    const gerador = new GeradorNumeros(1,10);
    let numeros = gerador.gerarNumeros(3);
    let resultado = document.getElementById("resultado");
    if(resultado instanceof HTMLParagraphElement){
        resultado.textContent = String(numeros);
    }
})