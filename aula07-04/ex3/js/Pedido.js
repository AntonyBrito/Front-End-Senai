export default class Pedido {
    #itens = [];

    constructor(itens = []) {
        this.#itens = itens;
    }

    adicionarItem(nome, quantidade, preco) {
        const item = { nome, quantidade, preco };
        this.#itens.push(item);
    }

    get itens() {
        return this.#itens;
    }

    calcularTotal() {
        let total = this.#itens.reduce((total, item) => total + item.quantidade * item.preco, 0);
        return total += total * 0.1;
    }
}
