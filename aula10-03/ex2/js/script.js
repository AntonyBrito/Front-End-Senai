const exibirResultado = (valor) => {
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLParagraphElement) {
    resultado.textContent = `R$ ${valor}`;
  }
};

const calcularDesconto = (precoInput, descontoInput) => {
  if (
    precoInput instanceof HTMLInputElement &&
    descontoInput instanceof HTMLInputElement
  ) {
    let preco = Number(precoInput.value);
    let desconto = Number(descontoInput.value);

    desconto = desconto == 0 ? 10 : desconto;

    desconto = desconto / 100;

    let valorDescontado = preco * desconto;
    let valor = preco - valorDescontado;
    exibirResultado(valor);
  }
};

function main() {
  let botao = document.getElementById('exibir');
  let precoInput = document.getElementById('precoInput');
  let descontoInput = document.getElementById('descontoInput');

  if (botao instanceof HTMLButtonElement) {
    botao.addEventListener('click', () => {
      calcularDesconto(precoInput, descontoInput);
    });
  }
}

document.addEventListener('DOMContentLoaded', main);
