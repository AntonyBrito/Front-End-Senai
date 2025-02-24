function obterValores() {
  let produtoSelecionado = document.getElementById('produtoSelecionado');
  let quantidadeSelecionada = document.getElementById('quantidadeSelecionada');

  if (
    produtoSelecionado instanceof HTMLInputElement &&
    quantidadeSelecionada instanceof HTMLInputElement
  ) {
    let produtoSelecionadoValor = Number(produtoSelecionado.value);
    let quantidadeSelecionadaValor = Number(quantidadeSelecionada.value);

    return () => produtoSelecionadoValor * quantidadeSelecionadaValor;
  }
}

function main() {
  let produtoSelecionado = document.getElementById('produtoSelecionado');
}

document.addEventListener('DOMContentLoaded', main);
