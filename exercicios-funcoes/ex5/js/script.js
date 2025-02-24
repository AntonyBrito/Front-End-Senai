function obterTexto() {
  let textInput = document.getElementById('textInput');
  if (textInput instanceof HTMLInputElement) {
    let textInputValor = textInput.value;
    return String(textInputValor);
  } else {
    return '@'; // nao tem vogais
  }
}

function contarVogais() {
  let texto = obterTexto();

  let cont = 0;
  texto = texto.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    if (
      texto.charAt(i) == 'a' ||
      texto.charAt(i) == 'e' ||
      texto.charAt(i) == 'i' ||
      texto.charAt(i) == 'o' ||
      texto.charAt(i) == 'u'
    ) {
      cont++;
    }
  }
  return cont;
}

function resultado() {
  let contagem = contarVogais();

  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    resultado.textContent = 'Total de vogais: ' + String(contagem);
  }
}

function main() {
  let botao = document.getElementById('botao');
  if (botao instanceof HTMLButtonElement) {
    botao.addEventListener('click', resultado);
  }
}

document.addEventListener('DOMContentLoaded', main);
