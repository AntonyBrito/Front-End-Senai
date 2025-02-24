function obterNumeros() {
  let entradaNumero = document.getElementById('numero');

  if (entradaNumero instanceof HTMLInputElement) {
    let numero = parseInt(entradaNumero.value);

    return { numero };
  }
  return { numero: 0 };
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLElement) {
    saida.textContent = resultado;
  }
}

const raiz = function (n) {
  return Math.sqrt(n);
};

const exponencial = function (n) {
  return Math.pow(n, n);
};

function calcular(operacao) {
  let numeros = obterNumeros();
  let numero = numeros.numero;

  let resultado;

  switch (operacao) {
    case 'raiz':
      resultado = raiz(numero);
      break;
    case 'exponencial':
      resultado = exponencial(numero);
      break;
    default:
      resultado = 'Operação inválida!';
  }

  exibirResultado(resultado);
}
