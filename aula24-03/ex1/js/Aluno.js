export class Aluno {
    #nome;
    #nota1;
    #nota2;
    #nota3;

    constructor(nome, nota1, nota2, nota3) {
        if (nome === undefined || nota1 === undefined || nota2 === undefined || nota3 === undefined) {
            alert("Preencha todos os campos adequadamente!");
        } else {
            this.#nome = nome;
            this.#nota1 = nota1;
            this.#nota2 = nota2;
            this.#nota3 = nota3;
        }
    }

    get nomeAluno() {
        return this.#nome;
    }

    calcularMedia() {
        return (Number(this.#nota1) + Number(this.#nota2) + Number(this.#nota3)) / 3;
    }
}
