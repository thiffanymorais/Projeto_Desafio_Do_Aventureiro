// História: Sobrevivência Extrema – Guerra Mundial Z
export const aventura1 = {
  titulo: "Mundo pós-apocalíptico",
  fases: [

    //Inicio
    {
      texto: "Você está no centro da cidade quando as sirenes começam a soar. Pessoas correm desesperadas, e você percebe que os infectados estão atacando sem piedade. Você precisa decidir rapidamente: fugir para um prédio alto ou tentar alcançar uma viatura policial abandonada?",
      opcoes: [
        { texto: "Subir no prédio", proximaFase: 1 },
        { texto: "Ir até a viatura", proximaFase: 2 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 1
    {
      texto: "Você sobe correndo as escadas do prédio, mas os zumbis já estão atrás de você. No último andar, há uma porta trancada e uma janela que dá para um telhado vizinho. O que fazer?",
      opcoes: [
        { texto: "Forçar a porta", proximaFase: 3 },
        { texto: "Pular pela janela", proximaFase: 4 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 2
    {
      texto: "Você chega à viatura e encontra uma espingarda e um rádio. Mas antes que consiga algo mais, um grupo de zumbis avança contra você. A única saída é entrar no carro e tentar ligá-lo ou fugir para um beco próximo.",
      opcoes: [
        { texto: "Ligar a viatura", proximaFase: 5 },
        { texto: "Correr para o beco", proximaFase: 6 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 3
    {
      texto: "A porta cede e você encontra um pequeno grupo de sobreviventes armados. Eles pedem sua ajuda para defender o prédio enquanto procuram uma rota de fuga.",
      opcoes: [
        { texto: "Ajudar na defesa", proximaFase: 7 },
        { texto: "Escapar sozinho", proximaFase: 8 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 4
    {
      texto: "Você pula e aterrissa no telhado vizinho, mas torce o tornozelo. Zumbis começam a escalar atrás de você. Você pode tentar continuar mancando ou procurar algo para se defender.",
      opcoes: [
        { texto: "Continuar mancando", proximaFase: 9 },
        { texto: "Procurar arma", proximaFase: 10 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 5
    {
      texto: "A viatura dá partida! Você acelera e atropela alguns zumbis, conseguindo sair da cidade e alcançar um refúgio no interior.",
      opcoes: [
        { texto: "Entrar no refúgio", proximaFase: -1 },
        { texto: "Seguir para outra cidade", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 6
    {
      texto: "O beco leva a um túnel subterrâneo, mas você ouve passos atrás de você. Algo ou alguém está te seguindo...",
      opcoes: [
        { texto: "Se esconder", proximaFase: 11 },
        { texto: "Correr mais rápido", proximaFase: 12 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 7
    {
      texto: "Vocês defendem o prédio, mas os suprimentos acabam. O grupo decide se separar. Você segue sozinho em busca de outro abrigo.",
      opcoes: [
        { texto: "Explorar os esgotos", proximaFase: 13 },
        { texto: "Buscar outro prédio", proximaFase: 14 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 8
    {
      texto: "Você escapa do prédio, mas fica vulnerável nas ruas infestadas. A única saída parece ser um helicóptero que pousou em um estádio próximo.",
      opcoes: [
        { texto: "Ir até o helicóptero", proximaFase: -1 },
        { texto: "Procurar abrigo nas montanhas", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 9
    {
      texto: "Sem arma, você continua mancando e os zumbis te alcançam... fim da linha.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: 0 },
        { texto: "", proximaFase: 0},
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 10
    {
      texto: "Você encontra um cano de ferro e luta contra os zumbis! Mas sua força está se esgotando. É preciso encontrar uma saída.",
      opcoes: [
        { texto: "Subir em um caminhão abandonado", proximaFase: -1 },
        { texto: "Correr para um shopping", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 11
    {
      texto: "Você se esconde no túnel e descobre um esconderijo de sobreviventes. Eles te acolhem e oferecem comida e proteção.",
      opcoes: [
        { texto: "Ficar com eles", proximaFase: -1 },
        { texto: "Continuar sozinho", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 12
    {
      texto: "Você corre, mas os passos ficam mais próximos. De repente, um sobrevivente aparece e atira nos zumbis. Ele te oferece ajuda.",
      opcoes: [
        { texto: "Aceitar a ajuda", proximaFase: -1 },
        { texto: "Recusar e seguir sozinho", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 13
    {
      texto: "Os esgotos são escuros e perigosos. Criaturas estranhas espreitam na escuridão... Você escuta algo se aproximando.",
      opcoes: [
        { texto: "Seguir em frente", proximaFase: -1 },
        { texto: "Voltar para a superfície", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 14
    {
      texto: "Você entra em outro prédio e encontra um rádio funcional. Você escuta uma mensagem de resgate a caminho!",
      opcoes: [
        { texto: "Esperar pelo resgate", proximaFase: -1 },
        { texto: "Continuar explorando", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    }
  ]
};

// História 2: Mundo de Fantasia - Final Fiction XIV
export const aventura2 = {
  titulo: "Final Fiction XIV",
  fases: [

    // Inicio
    {
      texto: "Esta é a .",
      opcoes: [
        { texto: "Opção 1", proximaFase: 1 },
        { texto: "Opção 2", proximaFase: 2 },
        { texto: "Opção 3", proximaFase: 3 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 1
    {
      texto: "Resposta 1 da escolha 1.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 4 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 2
    {
      texto: "Resposta 2 da escolha 1.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 4 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 3
    {
      texto: "Resposta 3 da escolha 1.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 4 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 4
    {
      texto: "Fase y da aventura. Aguarde a definição da narrativa completa.",
      opcoes: [
        { texto: "Opção 1", proximaFase: 5 },
        { texto: "Opção 2", proximaFase: 6 },
        { texto: "Opção 3", proximaFase: 7 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 5
    {
      texto: "Resposta 1 da escolha 2.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 8 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 6
    {
      texto: "Resposta 2 da escolha 2.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 8 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 7
    {
      texto: "Resposta 3 da escolha 2.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 8 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 8
    {
      texto: "Fase 3 da aventura. Aguarde a definição da narrativa completa.",
      opcoes: [
        { texto: "Opção 1", proximaFase: 9 },
        { texto: "Opção 2", proximaFase: 10 },
        { texto: "Opção 3", proximaFase: 11 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 9
    {
      texto: "Resposta 1 da escolha 3.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 12 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 10
    {
      texto: "Resposta 2 da escolha 3.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 12 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 11
    {
      texto: "Resposta 3 da escolha 3.",
      opcoes: [
        { texto: "Continuar...", proximaFase: 12 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 12
    {
      texto: "Fase 4 da aventura. Aguarde a definição da narrativa completa.",
      opcoes: [
        { texto: "Opção 1", proximaFase: 13 },
        { texto: "Opção 2", proximaFase: 14 },
        { texto: "Opção 3", proximaFase: 15 },
        { texto: "Opção 4", proximaFase: 16 }
      ]
    },
    
    // 13
    {
      texto: "Resposta 1 da escolha 4.",
      opcoes: [
        { texto: "Continuar...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 14
    {
      texto: "Resposta 2 da escolha 4.",
      opcoes: [
        { texto: "Continuar...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 15
    {
      texto: "Resposta 3 da escolha 4.",
      opcoes: [
        { texto: "Continuar...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 16
    {
      texto: "Resposta secreta 4 da escolha 4.",
      opcoes: [
        { texto: "Continuar...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },   

  ]
};
