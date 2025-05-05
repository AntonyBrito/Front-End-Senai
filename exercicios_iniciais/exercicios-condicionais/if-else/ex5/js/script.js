function enviar() {
  let notaInput = document.getElementById('notaInput');
  if (notaInput instanceof HTMLInputElement) {
    let notaInputValor = Number(notaInput.value);
    let resultado = document.getElementById('resultado');

    if (resultado != null) {
      resultado.textContent = situacao(notaInputValor);
    }
  }
}

function situacao(nota) {
  if (nota >= 5) {
    return 'Aprovado';
  } else if (nota < 5 && nota >= 3) {
    return 'Recuperação';
  } else {
    return 'Reprovado';
  }
}

function main() {
  let botao = document.getElementById('botao');
  if (botao instanceof HTMLButtonElement) {
    botao.addEventListener('click', enviar);
  }
}

document.addEventListener('DOMContentLoaded', main);
