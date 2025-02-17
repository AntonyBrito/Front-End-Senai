function main() {
  let botao = document.getElementById('botao');
  if (botao instanceof HTMLButtonElement) {
    botao.addEventListener('click', enviar);
  }
}

function enviar() {
  let inputNumero = document.getElementById('numeroInput');
  if (inputNumero instanceof HTMLInputElement) {
    let inputNumeroValor = Number(inputNumero.value);
    tabela(inputNumeroValor);
  }
}

function tabela(numero) {
  let matriz = '';

  for (let i = 0; i < numero; i++) {
    for (let j = 0; j < numero; j++) {
      matriz += (i + j) % 2 === 0 ? '0' : '1';
    }
    matriz += '<br />';
  }

  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    resultado.innerHTML = matriz;
  } 
}

document.addEventListener('DOMContentLoaded', main);
