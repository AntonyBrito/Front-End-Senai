function exibir() {
  let mesSelecionado = document.getElementById('mesSelecionado');

  if (mesSelecionado instanceof HTMLSelectElement) {
    let mesSelecionadoValor = Number(mesSelecionado.value);

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent =
        mesSelecionadoValor <= 12 && mesSelecionadoValor >= 1
          ? String(mesSelecionadoValor)
          : 'Selecione um mês valido';
    }
  }
}
