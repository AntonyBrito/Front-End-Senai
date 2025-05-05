function exibirConteudo(resultado) {
  console.log(resultado);
}

function somar(a, b, callback) {
  let res = a + b;
  callback(res);
}

somar(1, 2, exibirConteudo);
