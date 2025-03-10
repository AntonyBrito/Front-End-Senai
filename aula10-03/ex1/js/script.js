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
