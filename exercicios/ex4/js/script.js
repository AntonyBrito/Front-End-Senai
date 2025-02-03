function exibir() {
  let raioInput = document.getElementById('raioInput');

  if (raioInput instanceof HTMLInputElement) {
    let raioInputValor = Number(raioInput.value);
    let area = Math.PI * (raioInputValor * raioInputValor);

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent = 'Área: ' + area;
    }
  }
}
