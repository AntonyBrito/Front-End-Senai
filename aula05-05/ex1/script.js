function main() {
    let numeroInput = document.getElementById("numeroInput");
    if(numeroInput instanceof HTMLInputElement){
        return numeroInput.value;
    }
};

function converterParaArray(numeros) {
    let arrayNumeros = numeros.split(",");
    return arrayNumeros.map(Number);
}

function encontrarMaior(numeros) {
    return Math.max(...numeros);
}

function encontrarMenor(numeros) {
    return Math.min(...numeros);
}

function mostrarResultado(numeroMaior, numeroMenor) {
    let resultado = document.getElementById("resultado");
    if(resultado instanceof HTMLParagraphElement){
        resultado.textContent = `número maior: ${numeroMaior} |
                                 número menor: ${numeroMenor}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let enviarBtn = document.getElementById("enviarBtn");
    if(enviarBtn instanceof HTMLButtonElement){
        enviarBtn.addEventListener("click", () => {
            let numerosArrayString = main();
            let numerosArray = converterParaArray(numerosArrayString);
            let numeroMaior = encontrarMaior(numerosArray);
            let numeroMenor = encontrarMenor(numerosArray);
            mostrarResultado(numeroMaior, numeroMenor);
        });
    }
});