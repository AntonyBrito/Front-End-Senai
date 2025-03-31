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
}
