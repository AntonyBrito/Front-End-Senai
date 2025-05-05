function exibir() {
  let ladoUmInput = document.getElementById('ladoUmInput');
  let ladoDoisInput = document.getElementById('ladoDoisInput');
  let ladoTresInput = document.getElementById('ladoTresInput');

  if (
    ladoUmInput instanceof HTMLInputElement &&
    ladoDoisInput instanceof HTMLInputElement &&
    ladoTresInput instanceof HTMLInputElement
  ) {
    let ladoUmInputValor = ladoUmInput.value;
    let ladoDoisInputValor = ladoDoisInput.value;
    let ladoTresInputValor = ladoTresInput.value;

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      if (
        ladoUmInputValor == ladoDoisInputValor &&
        ladoDoisInputValor == ladoTresInputValor
      ) {
        resultado.textContent = 'Triângulo é equilátero';
      } else if (
        ladoUmInputValor == ladoDoisInputValor ||
        ladoDoisInputValor == ladoTresInputValor
      ) {
        resultado.textContent = 'Triângulo é isósceles';
      } else if (
        ladoUmInputValor != ladoDoisInputValor &&
        ladoDoisInputValor != ladoTresInputValor
      ) {
        resultado.textContent = 'Triângulo é escaleno';
      }
    }
  }
}
