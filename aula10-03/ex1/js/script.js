const saudacao = (nomePadrao, mensagemPadrao) => {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Olá ${nomePadrao}! ${mensagemPadrao}!`;
  }
};

function cliqueBotao(nomeInput, mensagemInput) {
  if (
    nomeInput instanceof HTMLInputElement &&
    mensagemInput instanceof HTMLInputElement
  ) {
    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;

    nome = nome === '' ? 'Visitante' : nome;
    mensagem = mensagem === '' ? 'Bem-vindo' : mensagem;

    /* if (nome === '') {
      nome = 'Visitante';
    } else {
      nome = nome;
    }
    if (mensagem === '') {
      mensagem = 'Bem-vindo';
    } else {
      mensagem = mensagem;
    } */

    saudacao(nome, mensagem);
  }
}

const configurarEventoSaudacao = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let nome = document.getElementById('nome');
  let mensagem = document.getElementById('mensagem');

  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', () => {
      cliqueBotao(nome, mensagem);
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoSaudacao);
