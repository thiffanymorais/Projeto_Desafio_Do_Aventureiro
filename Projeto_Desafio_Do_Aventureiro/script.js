import { aventura1, aventura2 } from './data.js';

let aventuraSelecionada = null;
let faseAtual = 0;
let vidas = 3;
let secretEnd = false;
let secretCon1 = false;
let secretCon2 = false;
let secretCon3 = false;
var fasesAvent2 = new Array(1,2,4,5,6,8,9,10,12,13,14,15);

// Elementos do DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game");
const tituloAventura = document.getElementById("titulo-aventura");
const storyElement = document.getElementById("story");
const btn1 = document.getElementById("option1");
const btn2 = document.getElementById("option2");
const btn3 = document.getElementById("option3");
const btn4 = document.getElementById("option4");
const vidasElement = document.getElementById("vidas");
const restartBtn = document.getElementById("restart");

// Função para iniciar a aventura escolhida
function iniciarAventura(aventura) {
  aventuraSelecionada = aventura;
  faseAtual = 0;
  vidas = 3;
  tituloAventura.textContent = aventuraSelecionada.titulo;
  
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  btn1.classList.remove("hidden");
  btn2.classList.remove("hidden");
  restartBtn.classList.add("hidden");
  
  atualizarJogo();
}

// Função para processar a escolha do jogador
function processarEscolha(proximaFase) {
  // Exemplo: se a escolha levar a perder uma vida (a lógica pode ser personalizada)
  // Aqui você pode incluir condições específicas para reduzir vidas
  // Exemplo simples: se proximaFase for 2 (pode ser alterado conforme a história)
  if (aventuraSelecionada == aventura1 && proximaFase === 2) {
    vidas--;
    if (vidas <= 0 && aventuraSelecionada == aventura1) {
      storyElement.textContent = "Você perdeu todas as vidas. Fim de jogo!";
      btn1.classList.add("hidden");
      btn2.classList.add("hidden");
      restartBtn.classList.remove("hidden");
      return;
    }
  }

  // Aventura 2
  if (aventuraSelecionada == aventura2 && fasesAvent2.indexOf(proximaFase) != -1) {
    btn2.classList.add("hidden");
    btn3.classList.add("hidden");
  } else if (aventuraSelecionada == aventura2) {
    btn2.classList.remove("hidden");
    btn3.classList.remove("hidden");
  }

  if (aventuraSelecionada == aventura2 && proximaFase == 2) {
    secretCon1 == true;
  }

  if (aventuraSelecionada == aventura2 && proximaFase == 6) {
    secretCon2 == true;
  }

  if (aventuraSelecionada == aventura2 && proximaFase == 10) {
    secretCon3 == true;
  }
  
  faseAtual = proximaFase;
  atualizarJogo();
}

// Função para atualizar a tela do jogo com a fase atual
function atualizarJogo() {
  // Verifica se a fase finalizou o jogo
  if (faseAtual === -1) {
    storyElement.textContent = "Fim do jogo. Obrigado por jogar!";
    btn1.classList.add("hidden");
    btn2.classList.add("hidden");
    btn3.classList.add("hidden");
    btn4.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    return;
  }

  const fase = aventuraSelecionada.fases[faseAtual];
  storyElement.textContent = fase.texto;
  btn1.textContent = fase.opcoes[0].texto;
  btn2.textContent = fase.opcoes[1].texto;
  btn3.textContent = fase.opcoes[2].texto;
  btn4.textContent = fase.opcoes[3].texto;
  vidasElement.textContent = `Vidas: ${vidas}`;
  
  btn1.onclick = () => {
    processarEscolha(fase.opcoes[0].proximaFase);
  };
  
  btn2.onclick = () => {
    processarEscolha(fase.opcoes[1].proximaFase);
  };
  
  btn3.onclick = () => {
    processarEscolha(fase.opcoes[2].proximaFase);
  };
  
  btn4.onclick = () => {
    processarEscolha(fase.opcoes[3].proximaFase);
  };

  if (aventuraSelecionada == aventura2 && secretCon1 == true && secretCon2 == true && secretCon3 == true) {
    secretEnd = true;
  }
  //fase final, escolha secreta
  if (aventuraSelecionada == aventura2 && proximaFase === 11 && secretEnd == true) {
    btn4.classList.remove("hidden");
  }
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



// Função para digitar o texto gradualmente (Não funcionando ainda)
function digitarTexto(texto) {
  for (let i = 0; i < texto.length; i++) {
    setTimeout(() => {
      target.textContent += msg[i];
    }, i * 1000);
  }
}