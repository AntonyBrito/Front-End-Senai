function verificarUserName(userName){
    return new Promise((resolve, reject) => {
        if(userName === "admin") {
            resolve("Login bem-sucedido")
        } else {
            reject("Credenciais inválidas")
        }
    })
}

async function testar(userName) {
    try{
        let resultado = await verificarUserName(userName)
        console.log("Sucesso: ", resultado)
    } catch(erro) {
        console.log("Erro: ", erro )
    }
}

testar("antony")