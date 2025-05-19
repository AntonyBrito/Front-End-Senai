function isPalindromo(palavra) {
    const length = palavra.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (palavra[i] !== palavra[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function verificarPalavra(palavra) {
    if (typeof palavra !== 'string' || palavra.length === 0) {
        return Promise.reject('Entrada inválida. Por favor, forneça uma palavra válida.');
    }

    return isPalindromo(palavra)
        ? Promise.resolve("É um palíndromo")
        : Promise.reject(`A palavra "${palavra}" não é um palíndromo`);
}

async function main(palavra) {
    try {
        let resultado = await verificarPalavra(palavra);
        console.log("Sucesso: ", resultado);
    } catch (erro) {
        console.error("Erro: ", erro);
    }
}

main("ovo"); 
main("gato"); 
main("");    
