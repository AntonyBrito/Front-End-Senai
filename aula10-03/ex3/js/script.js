const exibir = (isPar) => {
  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    let verificar = isPar ? 'O número é par' : 'O número é impar';
    resultado.textContent = verificar;
  }
};

const verificarPar = (numeroInput) => {
  if (numeroInput instanceof HTMLInputElement) {
    let numero = Number(numeroInput.value);

    let isPar = numero % 2 == 0 ? true : false;
    exibir(isPar);
  }
};

function main() {
  let botao = document.getElementById('botao');
  let numeroInput = document.getElementById('numeroInput');

  if (botao instanceof HTMLButtonElement) {
    botao.addEventListener('click', () => {
      verificarPar(numeroInput);
    });
  }
}

document.addEventListener('DOMContentLoaded', main);
