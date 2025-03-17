let arrayTarefa = [];

function exibirConteudo() {
    let saida = document.getElementById('resultado');
    if(saida instanceof HTMLParagraphElement) {
        saida.textContent = arrayTarefa.join(', ');
    }
    
}

function cadastrarTarefa(tarefa) {
    if(tarefa) {
        arrayTarefa.push(tarefa);
        exibirConteudo();
    } else{
        alert("Por favor, insira um valor válido!");
    }
}

function removerTarefa() {
    if(arrayTarefa.length > 0) {
        arrayTarefa.pop();
        exibirConteudo();
    }else {
        alert("Não existem tarefas cadastradas!")
    }
}

function removerTarefaEscolhida(tarefa) {
    let i = arrayTarefa.indexOf(tarefa);

    //retorna -1 quando não encontra o conteúdo
    if (i != -1) { 
        arrayTarefa.splice(i, 1);
        exibirConteudo();
    } else {
        alert("Não existem tarefas cadastradas!");
    }
}

const configurarTarefas = () => {
    let entradaTarefa = document.getElementById('tarefa');
    let cadastrarTarefaBtn = document.getElementById('cadastrarTarefaBtn');
    let removerTarefaBtn = document.getElementById('removerTarefaBtn');

    let tarefaEscolhida = document.getElementById('tarefaRemovida');
    let removerTarefaEscolhidaBtn = document.getElementById('removerTarefaEscolhidaBtn');

    if(cadastrarTarefaBtn instanceof HTMLButtonElement && entradaTarefa instanceof HTMLInputElement) {
        cadastrarTarefaBtn.addEventListener('click', () => {
            cadastrarTarefa(entradaTarefa.value);
            entradaTarefa.value = '';
        })
    }

    if(removerTarefaBtn instanceof HTMLButtonElement){
        removerTarefaBtn.addEventListener('click', () => {
            removerTarefa();
        })
    }

    if(removerTarefaEscolhidaBtn instanceof HTMLButtonElement && tarefaEscolhida instanceof HTMLInputElement) {
        removerTarefaEscolhidaBtn.addEventListener('click', () => {
            removerTarefaEscolhida(tarefaEscolhida.value);
            tarefaEscolhida.value = '';
        })
    }
}

document.addEventListener("DOMContentLoaded", configurarTarefas);