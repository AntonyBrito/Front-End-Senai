import { Aluno } from './aluno.js';

export class Main {
    constructor() {
        this.nomeAlunoInput = document.getElementById('nomeAlunoInput');
        this.notaUmInput = document.getElementById('notaUmInput');
        this.notaDoisInput = document.getElementById('notaDoisInput');
        this.notaTresInput = document.getElementById('notaTresInput');
        this.botaoCalcular = document.getElementById('botaoCalcular');
        this.resultado = document.getElementById('resultado');

        if (this.botaoCalcular instanceof HTMLButtonElement) {
            this.botaoCalcular.addEventListener('click', () => {
                let aluno = novoAluno(this.nomeAlunoInput, this.notaUmInput, this.notaDoisInput, this.notaTresInput);
                if (this.resultado instanceof HTMLParagraphElement) {
                    this.resultado.textContent = `${aluno.nomeAluno} - Média: ${aluno.calcularMedia().toFixed(2)}`;
                }
            });
        }
    }
}

function novoAluno(nomeInput, notaUmInput, notaDoisInput, notaTresInput) {
    if (nomeInput instanceof HTMLInputElement && notaUmInput instanceof HTMLInputElement &&
        notaDoisInput instanceof HTMLInputElement && notaTresInput instanceof HTMLInputElement) {
        return new Aluno(nomeInput.value, notaUmInput.value, notaDoisInput.value, notaTresInput.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Main();
});
