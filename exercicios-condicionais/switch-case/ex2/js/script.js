function enviar() {
  let numeroUmInput = document.getElementById('numeroUmInput');
  let numeroDoisInput = document.getElementById('numeroDoisInput');
  let operacaoInput = document.getElementById('operacaoInput');

  if (
    numeroUmInput instanceof HTMLInputElement &&
    numeroDoisInput instanceof HTMLInputElement &&
    operacaoInput instanceof HTMLInputElement
  ) {
    let numeroUmInputValor = Number(numeroUmInput.value);
    let numeroDoisInputValor = Number(numeroDoisInput.value);
    let operacaoInputValor = Number(operacaoInput.value);

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent =
        'Resultado: ' +
        String(
          casos(numeroUmInputValor, numeroDoisInputValor, operacaoInputValor)
        );
    }
  }
}

function casos(n1, n2, operacao) {
  switch (operacao) {
    case 1:
      return (n1 + n2) / 2;
      break;
    case 2:
      return n1 - n2;
      break;
    case 3:
      return n1 * n2;
      break;
    case 4:
      return n1 / n2;
      break;
    default:
      return 'Digite um número válido';
      break;
  }
}
