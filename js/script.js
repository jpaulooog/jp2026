// Importações dos módulos
import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

// Seleção de elementos do DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Ouvinte da Tela Inicial (Aula 8)
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    
    // Esconde a tela inicial
    telaInicial.style.display = 'none';
    
    // Remove a classe mostrar do resultado (caso seja um recomeço)
    caixaResultado.classList.remove("mostrar");
    
    // Garante que as caixas do jogo fiquem visíveis (Aula 8)
    caixaPerguntas.style.display = 'block';
    caixaAlternativas.style.display = 'block';

    mostraPergunta();
}

// Exibe a pergunta e gera botões dinamicamente
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    exibeAlternativas();
}

function exibeAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Processa a escolha, sorteia afirmação e direciona o fluxo (Aula 2 e Aula 7)
function respostaSelecionada(opcaoSelecionada) {
    // Sorteia uma afirmação caso seja um array, ou usa diretamente se for string
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    
    // Lógica Condicional do Fluxograma (Aula 7)
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

// Mostra a tela final montada (Aula 4 e Aula 5)
function mostraResultado() {
    // Esconde as perguntas e alternativas
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';

    caixaPerguntas.textContent = `Em 2049, ${nome}...`;
    textoResultado.textContent = historiaFinal;
    caixaResultado.classList.add("mostrar");
    
    // Configura o ouvinte para o botão Jogar Novamente (Aula 5)
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

// Reinicia o estado para uma nova partida (Aula 4 e Aula 5)
function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    
    // Volta para a tela inicial 
    telaInicial.style.display = 'block';
}// Importações dos módulos
import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

// Seleção de elementos do DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Ouvinte da Tela Inicial (Aula 8)
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    
    // Esconde a tela inicial
    telaInicial.style.display = 'none';
    
    // Remove a classe mostrar do resultado (caso seja um recomeço)
    caixaResultado.classList.remove("mostrar");
    
    // Garante que as caixas do jogo fiquem visíveis (Aula 8)
    caixaPerguntas.style.display = 'block';
    caixaAlternativas.style.display = 'block';

    mostraPergunta();
}

// Exibe a pergunta e gera botões dinamicamente
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    exibeAlternativas();
}

function exibeAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Processa a escolha, sorteia afirmação e direciona o fluxo (Aula 2 e Aula 7)
function respostaSelecionada(opcaoSelecionada) {
    // Sorteia uma afirmação caso seja um array, ou usa diretamente se for string
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    
    // Lógica Condicional do Fluxograma (Aula 7)
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

// Mostra a tela final montada (Aula 4 e Aula 5)
function mostraResultado() {
    // Esconde as perguntas e alternativas
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';

    caixaPerguntas.textContent = `Em 2049, ${nome}...`;
    textoResultado.textContent = historiaFinal;
    caixaResultado.classList.add("mostrar");
    
    // Configura o ouvinte para o botão Jogar Novamente (Aula 5)
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

// Reinicia o estado para uma nova partida (Aula 4 e Aula 5)
function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    
    // Volta para a tela inicial 
    telaInicial.style.display = 'block';
}

// Substitui "você" pelo nome sorteado globalmente (Aula 6)
function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

// Execução inicial
substituiNome();


// Substitui "você" pelo nome sorteado globalmente (Aula 6)
function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

// Execução inicial
substituiNome();
