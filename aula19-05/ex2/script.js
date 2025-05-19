function verificarPalavra(palavra) {
    return new Promise((resolve, reject) => {
        if(isPalindromo(palavra)) {
            resolve("É um palíndromo")
        } else {
            reject("Não é um palíndromo")
        }
    })
}

function isPalindromo(palavra) {
    return palavra === palavra.split('').reverse().join('')
}

async function main(palavra) {
    try{
        let resultado = await verificarPalavra(palavra)
        console.log("Sucesso: ", resultado)
    } catch(erro) {
        console.log("Erro: ", erro )
    }
}

main("ovo")