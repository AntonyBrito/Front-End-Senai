function exibir() {
  let numeroInput = document.getElementById('numeroInput');

  if (numeroInput instanceof HTMLInputElement) {
    let numeroInputValor = Number(numeroInput.value);

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      if (numeroInputValor == 0) {
        resultado.textContent = 'O número é zero';
      } else if (numeroInputValor > 0) {
        resultado.textContent = 'O número é positivo';
      } else {
        resultado.textContent = 'O número é negativo';
      }
    }
  }
}
