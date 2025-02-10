function enviar() {
  let produtoInput = document.getElementById('produtoInput');

  if (produtoInput instanceof HTMLInputElement) {
    let produtoInputValor = Number(produtoInput.value);

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent = casos(produtoInputValor);
    }
  }
}

function casos(numero) {
  switch (true) {
    case numero == 1:
      return 'Alimento não-perecível';
      break;
    case numero >= 2 && numero <= 4:
      return 'Alimento perecível';
      break;
    case numero == 5 && numero == 6:
      return 'Vestuário';
      break;
    case numero == 7:
      return 'Higiene Pessoal';
      break;
    case numero >= 8 && numero <= 15:
      return 'Limpeza e Utensílios Domésticos';
      break;
    default:
      return 'Código inválido';
      break;
  }
}
