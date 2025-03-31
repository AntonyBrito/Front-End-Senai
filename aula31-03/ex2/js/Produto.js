export default class Produto{
    #nome;
    #quantidade;
    #precoUnitario;

    constructor(nome, quantidade, precoUnitario){
        this.#nome = nome;
        this.#quantidade = quantidade;
        this.#precoUnitario = precoUnitario;
    }

    calcularValorTotal() {
        return this.#precoUnitario * this.#quantidade;
    }

    toString() {
        return `Nome: ${this.#nome},
        Quantidade: ${this.#quantidade},
        Preço unitário: ${this.#precoUnitario}`
    }
}
