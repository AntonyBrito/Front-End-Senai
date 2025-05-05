export default class GeradorNumeros {
    constructor(minimo, maximo) {
        this.minimo = minimo;
        this.maximo = maximo;
    }

    gerarNumeros(qtd) {
        if (qtd <= 0) {
            alert("A quantidade deve ser maior que zero.");
        }

        let numeros = [];
        for (let i = 0; i < qtd; i++) {
            numeros.push(Math.floor(Math.random() * (this.maximo - this.minimo + 1)) + this.minimo);
        }
        return numeros;
    }
}