function exibir() {
  let numeroDigitado = document.getElementById('numeroDigitado');
  let numeroValor;

  if (numeroDigitado instanceof HTMLInputElement) {
    numeroValor = numeroDigitado.value;
    let resultado = document.getElementById('resultado');

    if (resultado != null) {
      resultado.textContent =
        'Antecessor: ' +
        (Number(numeroValor) - 1) +
        ' |\nSucessor: ' +
        (Number(numeroValor) + 1);
    } else {
      console.error('Erro com o textContent');
    }
  }
}
