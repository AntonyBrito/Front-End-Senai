let nome_completo = "Antony Brito";

function validar_nome(nome) {
    let expressao_regular = /^[A-Za-z]+( [A-Za-z]+)+$/;

    if(expressao_regular.test(nome)){
        return console.log(`Nome: ${nome}, valido!`);
    }else {
        return console.log(`Nome: ${nome}, invalido!`);
    }
}

validar_nome(nome_completo);

