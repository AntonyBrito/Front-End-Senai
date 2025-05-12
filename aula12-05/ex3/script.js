let senha = "abc123!";

function validar_senha_forte(senha) {
    const EXPRESSAO_REGULAR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,16}$/;
    /*
    - (?=.*[a-z]) Lookahead positivo: deve conter pelo menos uma letra minúscula
    - (?=.*[A-Z]) Lookahead positivo: deve conter pelo menos uma letra maiúscula
    - (?=.*\d) Lookahead positivo: deve conter pelo menos um número
    - (?=.*[!@#$%^&*()\-_=+{};:,<.>]) Lookahead positivo: deve conter pelo menos um caractere especial
    - .{8,16} Entre 8 e 16 caracteres no total
    */
   let resultado = EXPRESSAO_REGULAR.test(senha) ? "VALIDO!" : "INVALIDO!";
   return resultado;
}

let resultado = validar_senha_forte(senha);
console.log(`Senha: ${senha}, ${resultado}`);