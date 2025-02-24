function inverterNumero(numero, callback) {
  return callback(numero);
}

const inverter = function (numero) {
  return numero.toString().split('').reverse().join('');
};

function exibirConteudo() {
  let entradaNumero = document.getElementById('numeroInput');

  if (entradaNumero instanceof HTMLInputElement) {
    let numeroInputValor = entradaNumero.value;
    let resultado = inverterNumero(numeroInputValor, inverter);
    let saida = document.getElementById('resultado');

    if (saida instanceof HTMLElement) {
      saida.textContent = 'Resultado: ' + resultado;
    }
  }
}
