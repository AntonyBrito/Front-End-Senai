function main() {
  let figuras = document.getElementsByClassName('icon');

  // Itera sobre todos os ícones
  for (let i = 0; i < figuras.length; i++) {
    let figura = figuras[i];

    figura.addEventListener('click', function () {
      let valor = figura.getAttribute('value');

      area(valor);
    });
  }
}

function area(figura) {
  let area;

  switch (figura) {
    case 'quadrado':
      let lQuadrado = prompt('Digite o valor do lado do quadrado:');

      if (lQuadrado != null) {
        let ladoQuadrado = parseFloat(lQuadrado);

        area = ladoQuadrado * ladoQuadrado;
        alert(`A área do quadrado é: ${area}.`);
      } else {
        alert('Digite um número válido');
      }
      break;

    case 'retangulo':
      let baseRetangulo = prompt('Digite o valor da base do retângulo:');
      let alturaRetangulo = prompt('Digite o valor da altura do retângulo:');

      if (baseRetangulo != null && alturaRetangulo != null) {
        let base = parseFloat(baseRetangulo);
        let altura = parseFloat(alturaRetangulo);

        area = base * altura;
        alert(`A área do retângulo é: ${area}.`);
      } else {
        alert('Digite um valor válido');
      }
      break;

    case 'trapezio':
      let baseMaior = prompt('Digite o valor da base maior do trapézio:');
      let baseMenor = prompt('Digite o valor da base menor do trapézio:');
      let alturaTrapezio = prompt('Digite o valor da altura do trapézio:');

      if (baseMaior != null && baseMenor != null && alturaTrapezio != null) {
        let maior = parseFloat(baseMaior);
        let menor = parseFloat(baseMenor);
        let altura = parseFloat(alturaTrapezio);

        area = ((maior + menor) * altura) / 2;
        alert(`A área do trapézio é: ${area}.`);
      } else {
        alert('Digite um valor válido');
      }
      break;

    case 'triangulo':
      let baseTriangulo = prompt('Digite o valor da base do triângulo:');
      let alturaTriangulo = prompt('Digite o valor da altura do triângulo:');

      if (baseTriangulo != null && alturaTriangulo != null) {
        let base = parseFloat(baseTriangulo);
        let altura = parseFloat(alturaTriangulo);

        area = (base * altura) / 2;
        alert(`A área do triângulo é: ${area}.`);
      } else {
        alert('Digite um valor válido');
      }
      break;

    case 'circulo':
      let raio = prompt('Digite o valor do raio do círculo:');

      if (raio != null) {
        let r = parseFloat(raio);

        area = Math.PI * Math.pow(r, 2);
        alert(`A área do círculo é: ${area.toFixed(2)}.`);
      } else {
        alert('Digite um valor válido');
      }
      break;

    default:
      alert('Figura não reconhecida.');
  }
}

document.addEventListener('DOMContentLoaded', main);
