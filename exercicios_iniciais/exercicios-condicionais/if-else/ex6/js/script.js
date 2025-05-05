function enviar() {
  let palavraInput = document.getElementById('palavraInput');

  if (palavraInput instanceof HTMLInputElement) {
    let palavraInputValor = palavraInput.value;

    let resultado = document.getElementById('resultado');
    if (resultado != null) {
      let valorInvertido = reverter(palavraInputValor);

      alert(
        valorInvertido == palavraInputValor
          ? 'A palavra ' +
              palavraInputValor +
              ' pode ser lida da mesa forma de trás para frente'
          : 'A palavra ' +
              palavraInputValor +
              ' não pode ser lida da mesa forma de trás para frente'
      );
    }
  }
}

function reverter(palavra) {
  return palavra.split('').reverse().join('');
}
