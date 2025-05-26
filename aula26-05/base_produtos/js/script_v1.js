//prettier-ignore
let produtos = [
    { nome: 'Fone', diretorio: 'fone', textoDescritivo: 'Fone de Ouvido Philips com Microfone - Branco' },
    { nome: 'Mouse', diretorio: 'mouse', textoDescritivo: 'Mouse Gamer Acer Nitro 7200 DPI - Preto' },
    { nome: 'HeadSet', diretorio: 'headSet', textoDescritivo: 'Headset Gamer Com Mic Quantum Jbl  - Preto' },
    { nome: 'Teclado', diretorio: 'teclado', textoDescritivo: 'Teclado Mecânico Gamer Phantom, ABNT2 - Preto' },
  ];
 
async function exibirProdutos() {
  for (let produto of produtos){
    produto.quantidadeFotos = await contarImagens(produto.diretorio)
  }

  inicializarProduto()
}

async function contarImagens(diretorio){
  const MAX_IMG = 3
  let contador = 0

  for (let i = 1; i <= MAX_IMG; i++) {
    let img = new Image()
    img.src = `img/${diretorio}/0${i}.jpg`
    
    try {
      await img.decode() //aguarda a decodificação da imagem
      contador++
    } catch (error) {
      console.log('Erro ao carregar a imagem' + error.message)
      break
    }
  }
  return contador
}

function inicializarProduto() {
  let containerPrincipal = document.getElementById("produtos")
  if(containerPrincipal instanceof HTMLDivElement){
    produtos.forEach((produto, indice) => {
      let containerProduto = criarContainerProduto(produto, indice)
      containerPrincipal.appendChild(containerProduto)
    })
  }
}

function criarContainerProduto(produto, indice) {
  let divProduto = document.createElement("div")
  divProduto.className = "container"

  let primeiraImagemDiv = criarQuadro(produto.diretorio, 1, true)
  divProduto.appendChild(primeiraImagemDiv)

  for (let i = 0; i <= produto.quantidadeFotos; i++) {
    let imagemDiv = criarQuadro(produto.diretorio, i, false)
    divProduto.appendChild(imagemDiv)
  }
  
  let linhaMiniaturas = criarLinhasMiniaturas(produto.diretorio, produto.quantidadeFotos, indice)
  divProduto.appendChild(linhaMiniaturas)

  return divProduto
}

function criarQuadro(diretorio, numero, visivel) {
  let quadro = document.createElement('div')
  quadro.className = 'minhaImagem'
  quadro.style.display = visivel ? 'block' : 'none'

  let imagem = document.createElement('img')
  imagem.src = `img/${diretorio}/0${numero}.jpg`
  quadro.appendChild(imagem)

  return quadro
}

function criarLinhasMiniaturas(diretorio, quantidadeFotos, indice) {
  let linhaMiniaturas = document.createElement('div')
  linhaMiniaturas.className = 'linha'

  for (let i = 1; i <= quantidadeFotos; i++) {
    let coluna = document.createElement('div')
    coluna.className = 'coluna'

    let miniatura = document.createElement('img')
    miniatura.className = 'cursor'
    miniatura.src = `img/${diretorio}/0${i}.jpg`

    if (i === 1){
      miniatura.classList.add('minhaMiniaturaSelecionada')
    }
/*
    miniatura.onclick = () => {
      alterarImagem(indice, i, miniatura)
    }
*/
    coluna.appendChild(miniatura)
    linhaMiniaturas.appendChild(coluna)
  }

  return linhaMiniaturas
}

document.addEventListener("DOMContentLoaded", exibirProdutos)
