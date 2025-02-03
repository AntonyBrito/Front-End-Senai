function exibir() {
  let fraseInput = document.getElementById('fraseInput');

  if (fraseInput instanceof HTMLInputElement) {
    let fraseInputValor = fraseInput.value;

    let resultado = document.getElementById('resultado');

    let maiuscula = fraseInputValor.toUpperCase();
    let minuscula = fraseInputValor.toLowerCase();
    let tamanho = fraseInputValor.length;

    if (resultado != null) {
      resultado.textContent =
        'Maiúscula: ' +
        maiuscula +
        ' |\n Minúscula: ' +
        minuscula +
        ' |\n Tamanho: ' +
        tamanho;
    }
  }
}
