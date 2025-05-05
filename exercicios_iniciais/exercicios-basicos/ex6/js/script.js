function exibir() {
  let disciplinaOption = document.getElementById('disciplinaOption');

  if (disciplinaOption instanceof HTMLSelectElement) {
    let disciplinaOptionValor = disciplinaOption.value;

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent = 'Boas-vindas à ' + disciplinaOptionValor;
    }
  }
}
