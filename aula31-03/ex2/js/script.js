import Produto from './Produto.js';
import Estoque from './Estoque.js';

let estoques = [];

function configurar() {
    let nomeProdutoInput = document.getElementById('nomeProdutoInput');
    let quantidadeProdutoInput = document.getElementById('quantidadeProdutoInput');
    let precoUnitarioProdutoInput = document.getElementById('precoProdutoInput');
    let adicionarProdutoBtn = document.getElementById('adicionarProdutoBtn');
    let idEstoqueInput = document.getElementById('idEstoqueInput');
    let calcularEstoqueBtn = document.getElementById('calcularEstoqueBtn');
    let estoquesDisponiveis = document.getElementById('estoquesDisponiveis');

    if (nomeProdutoInput instanceof HTMLInputElement && 
        quantidadeProdutoInput instanceof HTMLInputElement && 
        precoUnitarioProdutoInput instanceof HTMLInputElement &&
        adicionarProdutoBtn instanceof HTMLButtonElement &&
        idEstoqueInput instanceof HTMLInputElement &&
        calcularEstoqueBtn instanceof HTMLButtonElement) {

        adicionarProdutoBtn.addEventListener('click', () => {
            const nome = nomeProdutoInput.value;
            const quantidade = parseInt(quantidadeProdutoInput.value);
            const precoUnitario = parseFloat(precoUnitarioProdutoInput.value);
            const idEstoque = parseInt(idEstoqueInput.value);

            if (validarCampos(nome, quantidade, precoUnitario, idEstoque)) {
                adicionarProduto(nome, quantidade, precoUnitario, idEstoque);
                exibirEstoquesDisponiveis(estoquesDisponiveis);
            }
        });

        calcularEstoqueBtn.addEventListener('click', () => {
            calcularValorEstoque();
        });
    }
}

function validarCampos(nome, quantidade, precoUnitario, idEstoque) {
    if (!nome || quantidade <= 0 || precoUnitario <= 0 || !idEstoque || isNaN(quantidade) || isNaN(precoUnitario)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    }
    return true;
}

function adicionarProduto(nome, quantidade, precoUnitario, idEstoque) {
    let estoqueExistente = estoques.find(estoque => estoque.id === idEstoque);

    if (!estoqueExistente) {
        estoqueExistente = new Estoque(idEstoque);
        estoques.push(estoqueExistente);
    }

    const produto = new Produto(nome, quantidade, precoUnitario);
    estoqueExistente.adicionarProduto(produto);
    alert('Produto adicionado ao estoque!');
}

function calcularValorEstoque() {
    const idEstoque = document.getElementById('estoqueInput').value;
    const estoque = estoques.find(e => e.id == idEstoque);

    if (estoque) {
        const valorTotal = estoque.calcularValorTotalEstoque();
        alert(`Valor total do estoque ${estoque.id}: R$ ${valorTotal.toFixed(2)}`);
    } else {
        alert('Estoque não encontrado!');
    }
}

function exibirEstoquesDisponiveis(estoquesDisponiveis) {
    estoquesDisponiveis.innerHTML = '<p><strong>Estoques Disponíveis:</strong></p>';

    if (estoques.length === 0) {
        estoquesDisponiveis.innerHTML += '<p>Nenhum estoque criado ainda.</p>';
    } else {
        estoques.forEach(estoque => {
            const estoqueDiv = document.createElement('div');
            estoqueDiv.classList.add('estoque');

            let produtosHTML = '';
            estoque.produtos.forEach(produto => {
                produtosHTML += `<div class="produto">${produto.toString()} - Valor Total: R$ ${produto.calcularValorTotal().toFixed(2)}</div>`;
            });

            estoqueDiv.innerHTML = `
                <p><strong>ID do Estoque ${estoque.id}</strong></p>
                <div class="estoque-info">
                    <p><strong>Produtos no estoque:</strong></p>
                    ${produtosHTML}
                    <p class="valor-total">Valor Total: R$ ${estoque.calcularValorTotalEstoque().toFixed(2)}</p>
                </div>
            `;
            
            estoquesDisponiveis.appendChild(estoqueDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', configurar);
