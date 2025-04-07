function configurar(){
    let idadeInput = document.getElementById('idadeInput');
    let enviarBtn = document.getElementById('enviarBtn');
    if(idadeInput instanceof HTMLInputElement && enviarBtn instanceof HTMLButtonElement){
        enviarBtn.addEventListener("click", () =>{
            try {
                let idade = Number(idadeInput.value);
                if(isNaN(idade)){
                    throw new Error('Idade inválida!');
                } else if(idade < 0){
                    throw new Error('Idade negativa!');
                } else if(idade < 18){
                    throw new Error('Idade menor que 18!');
                } else{
                    console.log("Idade aprovada!")
                }
            } catch (error) {
                console.log(error.message);
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', configurar)