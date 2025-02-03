function exibir() {
  let baseMaior = document.getElementById('baseMaiorInput');
  let baseMenor = document.getElementById('baseMenorInput');
  let altura = document.getElementById('alturaInput');

  let baseMaiorValor, baseMenorValor, alturaValor;

  if (
    baseMaior instanceof HTMLInputElement &&
    baseMenor instanceof HTMLInputElement &&
    altura instanceof HTMLInputElement
  ) {
    baseMaiorValor = baseMaior.value; //poderia usar parseFloat(baseMaior.value);
    baseMenorValor = baseMenor.value;
    alturaValor = altura.value;

    let resultado = document.getElementById('resultado');

    if (resultado != null) {
      resultado.textContent =
        'Área do trapézio: ' +
        ((Number(baseMaiorValor) + Number(baseMenorValor)) *
          Number(alturaValor)) /
          2;
    }
  }
}
