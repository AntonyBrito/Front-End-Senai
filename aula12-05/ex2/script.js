let cpf = "999.999.999-99";
let rg = "99.999.999-9";

function validar_cpf_rg(cpf, rg) {
    const EXPRESSAO_REGULAR_RG = /^\d{2}\.?\d{3}\.?\d{3}\-?\d{1}$/;
    const EXPRESSAO_REGULAR_CPF = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    /*
    - /^ indica o inicio da regex
    - \d{3} indica 3 digitos
    - \.? ponto opcional pode ou não ter 
    - \-? hífen opcional
    - \d{2} indica dois digitos
    - $ indica o fim
    */
   let resposta_cpf = EXPRESSAO_REGULAR_CPF.test(cpf) ? "VALIDO!" : "INVALIDO!";
   let resposta_rg = EXPRESSAO_REGULAR_RG.test(rg) ? "VALIDO!" : "INVALIDO!";

   return {resposta_cpf, resposta_rg}
}

let resultado = validar_cpf_rg(cpf, rg);

console.log(`CPF: ${cpf}, ${resultado.resposta_cpf}`);
console.log(`RG: ${rg}, ${resultado.resposta_rg}`);