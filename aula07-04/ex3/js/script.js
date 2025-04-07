import Pedido from './Pedido.js';
const pedido = new Pedido;

function configurar(){
    let nomeItemInput = document.getElementById("nomeItemInput");
    let quantidadeItemInput = document.getElementById("quantidadeItemInput");
    let precoItemInput = document.getElementById("precoItemInput");
    let adicionarItemBtn = document.getElementById("adicionarItemBtn");
    let quantidadeDeItens = document.getElementById("quantidadeDeItens");
    let valorTotal = document.getElementById("valorTotal");
    let finalizarPedidoBtn = document.getElementById("finalizarPedidoBtn")

    if(nomeItemInput instanceof HTMLInputElement &&
       quantidadeItemInput instanceof HTMLInputElement &&
       precoItemInput instanceof HTMLInputElement &&
       adicionarItemBtn instanceof HTMLButtonElement &&
       quantidadeDeItens instanceof HTMLParagraphElement &&
       valorTotal instanceof HTMLParagraphElement &&
       finalizarPedidoBtn instanceof HTMLButtonElement
    ){
        adicionarItemBtn.addEventListener("click", () =>{
            let nome = nomeItemInput.value;
            let quantidade = Number(quantidadeItemInput.value);
            let preco = Number(precoItemInput.value);

            if(validarCampos(nome, quantidade, preco)){
                adicionarItemAoPedido(nome, quantidade, preco);
                limparCampos(nomeItemInput, quantidadeItemInput, precoItemInput);
                quantidadeDeItens.textContent = "Total de itens: " + String(contador());
            }
        })

        finalizarPedidoBtn.addEventListener('click', () =>{
            valorTotal.textContent = finalizarPedido();
        })
    }
}

function validarCampos(nome, quantidade, preco){
    if(!nome || quantidade <= 0 || preco <= 0){
        alert("Por favor, preencha os campos corretamente!")
        return false;
    }
    return true;
}

function adicionarItemAoPedido(nome, quantidade, preco){
    pedido.adicionarItem(nome, quantidade, preco)
    alert(`Item ${nome} adicionado ao pedido!`)
}

function contador(){
    let contagem = 0;
    pedido.itens.forEach(item => {
        contagem += 1;
    });
    return contagem;
}

function limparCampos(inputNome, inputQuantidade, inputPreco){
    inputNome.value = '';
    inputQuantidade.value = '';
    inputPreco.value = '';
}

function finalizarPedido(){
    if(pedido){
        let valorTotal = pedido.calcularTotal();
        return `Valor total de R$${valorTotal}`
    }else{
        return `Adicione algum item no pedido!`
    }
}

document.addEventListener('DOMContentLoaded', configurar);