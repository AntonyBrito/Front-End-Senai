import Aluno from './Aluno.js';
class Principal{
    constructor(){
        this.nomeAluno = null;
        this.notasAluno = [];
    }

    #configurar(){
        let nome = document.getElementById('nome');
        let nota = document.getElementById('nota');
        let botaoAdicionar = document.getElementById('adicionarNotaBtn');


        if(nome instanceof HTMLInputElement && nota instanceof HTMLInputElement 
            && botaoAdicionar instanceof HTMLButtonElement){
                botaoAdicionar.addEventListener('click', () => {
                    this.#adicionarConteudo();
                })

        }
    }
    #adicionarConteudo(){

    }
}