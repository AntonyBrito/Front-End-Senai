function receberPalavra(palavra) {
    return new Promise((resolve) => {
        let palavraInvertida = palavra.split('').reverse().join('');
        resolve(paraMaiuscula(palavraInvertida));
    });
}

function paraMaiuscula(palavra) {
    return palavra.toUpperCase();
}

async function main(palavra) {
    try {
        let resultado = await receberPalavra(palavra);
        console.log("Sucesso:", resultado);
    } catch(erro) {
        console.log("Erro:", erro);
    }
}

main("hello");