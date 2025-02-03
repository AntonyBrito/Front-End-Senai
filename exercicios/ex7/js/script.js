function exibir() {
  let produtoSelecionado = document.getElementById('produtoSelecionado');
  let descontoSelecionado = document.getElementById('descontoSelecionado');

  if (
    produtoSelecionado instanceof HTMLSelectElement &&
    descontoSelecionado instanceof HTMLSelectElement
  ) {
    let produtoSelecionadoValor = Number(produtoSelecionado.value);
    let descontoSelecionadoValor = Number(descontoSelecionado.value);

    let valorComDesconto =
      produtoSelecionadoValor -
      produtoSelecionadoValor * descontoSelecionadoValor;

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent = 'Valor com desconto R$' + valorComDesconto;
    }
  }
}
