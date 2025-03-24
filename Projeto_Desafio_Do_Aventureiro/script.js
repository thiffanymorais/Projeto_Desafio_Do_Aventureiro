import { aventura1, aventura2 } from './data.js';

let aventuraSelecionada = null;
let faseAtual = 0;
let vidas = 3;

// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game");
const tituloAventura = document.getElementById("titulo-aventura");
const storyElement = document.getElementById("story");
const btn1 = document.getElementById("option1");
const btn2 = document.getElementById("option2");
const livesElement = document.getElementById("lives");
const restartBtn = document.getElementById("restart");

// Função para atualizar a tela do jogo com a fase atual
function atualizarJogo() {
  // Verifica se a fase finalizou o jogo
  if (faseAtual === -1) {
    storyElement.textContent = "Fim do jogo! Obrigado por jogar.";
    btn1.classList.add("hidden");
    btn2.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    return;
  }
  
  const fase = aventuraSelecionada.fases[faseAtual];
  storyElement.textContent = fase.texto;
  btn1.textContent = fase.opcoes[0].texto;
  btn2.textContent = fase.opcoes[1].texto;
  livesElement.textContent = `Vidas: ${vidas}`;
  
  btn1.onclick = () => {
    processarEscolha(fase.opcoes[0].proximaFase);
  };
  
  btn2.onclick = () => {
    processarEscolha(fase.opcoes[1].proximaFase);
  };
}

// Função para processar a escolha do jogador
function processarEscolha(proximaFase) {
  // Exemplo: se a escolha levar a perder uma vida (a lógica pode ser personalizada)
  // Aqui você pode incluir condições específicas para reduzir vidas
  // Exemplo simples: se proximaFase for 2 (pode ser alterado conforme a história)
  if (faseAtual === 0 && proximaFase === 2) {
    vidas--;
    if (vidas <= 0) {
      storyElement.textContent = "Você perdeu todas as vidas. Fim de jogo!";
      btn1.classList.add("hidden");
      btn2.classList.add("hidden");
      restartBtn.classList.remove("hidden");
      return;
    }
  }
  
  faseAtual = proximaFase;
  atualizarJogo();
}

// Função para iniciar a aventura escolhida
function iniciarAventura(aventura) {
  aventuraSelecionada = aventura;
  faseAtual = 0;
  vidas = 3;
  tituloAventura.textContent = aventuraSelecionada.titulo;
  
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  restartBtn.classList.add("hidden");
  
  atualizarJogo();
}

// Eventos dos botões da tela inicial
document.getElementById("aventura1").addEventListener("click", () => {
  iniciarAventura(aventura1);
});

document.getElementById("aventura2").addEventListener("click", () => {
  iniciarAventura(aventura2);
});

// Evento para reiniciar o jogo
restartBtn.addEventListener("click", () => {
  startScreen.classList.remove("hidden");
  gameScreen.classList.add("hidden");
});
