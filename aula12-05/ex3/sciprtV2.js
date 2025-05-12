let senha = "bc123!@";

function validar_senha_forte(senha) {
    const criterios = [
        { regex: /.{8,16}/, mensagem: "Deve ter entre 8 e 16 caracteres" },
        { regex: /[a-z]/, mensagem: "Deve conter pelo menos uma letra minúscula" },
        { regex: /[A-Z]/, mensagem: "Deve conter pelo menos uma letra maiúscula" },
        { regex: /\d/, mensagem: "Deve conter pelo menos um número" },
        { regex: /[!@#$%^&*()\-_=+{};:,<.>]/, mensagem: "Deve conter pelo menos um caractere especial" }
    ];

    const erros = criterios.filter(criterio => !criterio.regex.test(senha));

    if (erros.length === 0) {
        return "VÁLIDA!";
    } else {
        return `INVÁLIDA. Motivos:\n${erros.map(erro => `- ${erro.mensagem}`).join("\n")}`;
    }
}

const resultado = validar_senha_forte(senha);
console.log(`Senha: "${senha}" → ${resultado}`);