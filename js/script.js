// Importações dos módulos (Aula 3 e Aula 6)
import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

// Seleção de elementos do DOM (Aula 1 e Aula 4/8)
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
    telaInicial.style.display = 'none';
    
    // Tornar caixas visíveis controlando as classes (Aula 8)
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");

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
    caixaPerguntas.textContent = `Em 2049, ${nome}...`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    
    // Configura o botão Jogar Novamente (Aula 5)
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

// Reinicia o estado para uma nova partida (Aula 4 e Aula 5)
function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    
    // Volta para a tela inicial em vez de saltar direto para as perguntas
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
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
