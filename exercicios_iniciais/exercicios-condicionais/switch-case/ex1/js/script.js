function enviar() {
  let numeroInput = document.getElementById('numeroInput');

  if (numeroInput instanceof HTMLInputElement) {
    let numeroInputValor = Number(numeroInput.value);

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      resultado.textContent = casos(numeroInputValor);
    }
  }
}

function casos(numero) {
  switch (numero) {
    case 1:
      return 'Sua prima chama vera?';
      break;

    case 2:
      return 'O verão é a estação do ano mais quente e é caracterizado por dias mais longos e chuvas abundantes.';
      break;

    case 3:
      return 'O outono é a estação do ano que ocorre entre o verão e o inverno. É uma estação de transição, com temperaturas amenas e dias e noites com durações semelhantes.';
      break;

    case 4:
      return 'O inverno é uma das quatro estações do ano, sendo a mais fria. É caracterizado por baixas temperaturas, dias mais curtos e noites mais longas.';
      break;
    default:
      return 'Digite um número válido';
      break;
  }
}
