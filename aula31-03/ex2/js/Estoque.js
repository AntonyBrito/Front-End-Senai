export default class Estoque {
    #id;
    #produtos = [];

    constructor(id, produtos = []) {
        this.#id = id;
        this.#produtos = produtos;
    }
    
    get id() {
        return this.#id;
    }

    get produtos() {
        return this.#produtos;
    }

    adicionarProduto(produto) {
        this.#produtos.push(produto);
    }

    removerProduto(produto) {
        let index = this.#produtos.findIndex(i => i === produto);
        if(index !== -1) {
            this.#produtos.splice(index, 1);
        }else{
            alert("Produto não encontrado!")
        }
    }

    calcularValorTotalEstoque() {
        return this.#produtos.reduce((total, produto) => {
            return total + produto.calcularValorTotal();     
        }, 0);
    }
}
