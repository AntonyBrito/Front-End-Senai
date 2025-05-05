function mostrarResultado(valor) {
    let resultado = document.getElementById("resultado")
    if(resultado instanceof HTMLParagraphElement){
        resultado.textContent = valor;
    }
}

function substituirPalavra(frase, palavra, palavraSub){
    if(frase.includes(palavra)){
        return frase.replace(palavra, palavraSub)
    } else {
        alert(`A frase ${frase} não possui a palavra ${palavra}`)
    }
}

function main() {
    let fraseInput = document.getElementById("fraseInput")
    let palavraInput = document.getElementById("palavraInput")
    let palavraSubInput = document.getElementById("palavraSubInput")

    if(fraseInput instanceof HTMLInputElement &&
        palavraInput instanceof HTMLInputElement &&
        palavraSubInput instanceof HTMLInputElement
    ){
        let frase = fraseInput.value
        let palavra = palavraInput.value
        let palavraSub = palavraSubInput.value

        let novaFrase = substituirPalavra(frase, palavra, palavraSub)
        mostrarResultado(novaFrase)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let enviarBtn = document.getElementById("enviarBtn")
    if (enviarBtn instanceof HTMLButtonElement){
        enviarBtn.addEventListener("click", main)
    }
})