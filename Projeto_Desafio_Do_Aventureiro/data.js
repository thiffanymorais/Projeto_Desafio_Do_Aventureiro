// História: Sobrevivência Extrema – Guerra Mundial Z
export const aventura1 = {
  titulo: "Mundo pós-apocalíptico",
  fases: [
    // inicio
    {
      texto: "O mundo como você conhecia acabou. Uma infecção zumbi varreu a civilização, deixando apenas caos e destruição. Você é um dos poucos sobreviventes tentando permanecer vivo neste pesadelo.",
      opcoes: [
        { texto: "Começar...", proximaFase: 1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    //1
    {
      texto: "Você está no centro da cidade quando as sirenes começam a soar. Pessoas correm desesperadas, e você percebe que os infectados estão atacando sem piedade. Você precisa decidir rapidamente: fugir para um prédio alto ou tentar alcançar uma viatura policial abandonada?",
      opcoes: [
        { texto: "Subir no prédio", proximaFase: 2 },
        { texto: "Ir até a viatura", proximaFase: 3 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 2
    {
      texto: "Você sobe correndo as escadas do prédio, mas os zumbis já estão atrás de você. No último andar, há uma porta trancada e uma janela que dá para um telhado vizinho. O que fazer?",
      opcoes: [
        { texto: "Forçar a porta", proximaFase: 4 },
        { texto: "Pular pela janela", proximaFase: 5 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 3
    {
      texto: "Você chega à viatura e encontra uma espingarda e um rádio. Mas antes que consiga algo mais, um grupo de zumbis avança contra você. A única saída é entrar no carro e tentar ligá-lo ou fugir para um beco próximo.",
      opcoes: [
        { texto: "Dirigir a viatura", proximaFase: 6 },
        { texto: "Correr para o beco", proximaFase: 7 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 4
    {
      texto: "A porta cede e você encontra um pequeno grupo de sobreviventes armados. Eles pedem sua ajuda para defender o prédio enquanto procuram uma rota de fuga.",
      opcoes: [
        { texto: "Ajudar na defesa", proximaFase: 8 },
        { texto: "Escapar sozinho", proximaFase: 9 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 5
    {
      texto: "Você pula e aterrissa no telhado vizinho, mas torce o tornozelo. Zumbis começam a escalar atrás de você. Você pode tentar continuar mancando ou procurar algo para se defender.",
      opcoes: [
        { texto: "Continuar mancando", proximaFase: 10 },
        { texto: "Procurar arma", proximaFase: 11 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 6
    {
      texto: "A viatura dá partida, sem ligar as sirenes. Você acelera e atropela alguns zumbis, conseguindo sair da cidade e alcançar um refúgio no interior.",
      opcoes: [
        { texto: "Entrar no refúgio", proximaFase: 17 },
        { texto: "Seguir para outra cidade", proximaFase: 16 },//arrumar final
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 7
    {
      texto: "O beco leva a um túnel subterrâneo, mas você ouve passos atrás de você. Algo ou alguém está te seguindo...",
      opcoes: [
        { texto: "Se esconder", proximaFase: 12 },
        { texto: "Correr mais rápido", proximaFase: 13 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 8
    {
      texto: "Vocês defendem o prédio, mas os suprimentos acabam. O grupo decide se separar. Você segue sozinho em busca de outro abrigo.",
      opcoes: [
        { texto: "Explorar os esgotos", proximaFase: 14 },
        { texto: "Buscar outro prédio", proximaFase: 15 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 9
    {
      texto: "Você escapa do prédio, mas fica vulnerável nas ruas infestadas. A única saída parece ser um helicóptero que pousou em um estádio próximo.",
      opcoes: [
        { texto: "Ir até o helicóptero", proximaFase: 18 },
        { texto: "Procurar abrigo nas montanhas", proximaFase: 19 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 10
    {
      texto: "Sem arma, você continua mancando e os zumbis te alcançam... fim da linha.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: -1 },
        { texto: "", proximaFase: 0},
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 11
    {
      texto: "Você encontra um cano de ferro e luta contra os zumbis! Mas sua força está se esgotando. É preciso encontrar uma saída.",
      opcoes: [
        { texto: "Subir em um caminhão abandonado", proximaFase: 20 },
        { texto: "Correr para um shopping", proximaFase: 21 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 12
    {
      texto: "Você se esconde no túnel e descobre um esconderijo de sobreviventes. Eles te acolhem e oferecem comida e proteção.",
      opcoes: [
        { texto: "Ficar com eles", proximaFase: 16},
        { texto: "Continuar sozinho", proximaFase: 14 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 13
    {
      texto: "Você corre, mas os passos ficam mais próximos. De repente, um sobrevivente aparece e atira nos zumbis. Ele te oferece ajuda.",
      opcoes: [
        { texto: "Aceitar a ajuda", proximaFase: 16 },
        { texto: "Recusar e seguir sozinho", proximaFase: 14 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 14
    {
      texto: "Os esgotos são escuros e perigosos. Criaturas estranhas espreitam na escuridão... Você escuta algo se aproximando.",
      opcoes: [
        { texto: "Seguir em frente", proximaFase: 13},//arrumar final
        { texto: "Voltar para a superfície", proximaFase: 17 },//arrumar final
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 15
    {
      texto: "Você entra em outro prédio e encontra um rádio funcional. Você escuta uma mensagem de resgate a caminho!",
      opcoes: [
        { texto: "Esperar pelo resgate", proximaFase: 22 },
        { texto: "Continuar explorando", proximaFase: 2 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 16
    {
        texto: "Você encontra um grupo de sobreviventes organizados. Após algumas semanas de quarentena é aceito na comunidade. Anos depois, ajudaria a recontruir a civilização",
        opcoes: [
          { texto: "Recomeçar", proximaFase: -1 },
          { texto: "", proximaFase: 0},
          { texto: "", proximaFase: 0 },
          { texto: "", proximaFase: 0 }
        ]
    },

    // 17
    {
      texto: "Na estrada, você encontra uma caravana militar. junta-se a eles e se torna um explorador,mapeando áreas seguras e resgatando outros sobreviventes. Encontra um novo propósito na vida.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: -1 },
        { texto: "", proximaFase: 0},
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    //18
    {
      texto: "Enquanto o helicóptero decola, você vê a cidade em ruínas abaixo. O soldado entrega a você um cobertor e um comunicador: 'Fomos os últimos a sair. Você é um sobrevivente sortudo - estamos te levando para a zona segura'. O sol nasce no horizonte enquanto vocês voam em direção à segurança.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    //19
    {
      texto: "Você decide evitar o helicóptero e se dirige às montanhas, onde a horda parece menos densa. Após dias de caminhada, encontra uma cabana abandonada, protegida por um vale estreito. Dentro, há suprimentos, uma fonte de água limpa e até um rádio amador. A paz das montanhas torna-se um novo começo.",
      opcoes: [
        { texto: "Estabelecer um abrigo permanente", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
     // 20
     {
      texto: "Você corre até o caminhão e tenta dirigir para longe, mas ele não está funcionando. Os zumbis te alcançam mas você não está seguro e se cansa de lutar.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    //21
    {
      texto: "O shopping está repleto de zumbis. Você tenta retornar por onde entrou, mas eles fecharam seu caminho, te deixando encurralado.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    //22
    {
      texto: "Você espera pelo Resgate mas os zumbis acabam quebrando a porta e te deixam encurralado.",
      opcoes: [
        { texto: "Recomeçar", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    
  ]
};

// -----------------------------------------------------------------------------------------------------

// História 2: Mundo de Fantasia - Final Fiction XIV
export const aventura2 = {
  titulo: "Final Fiction XIV",
  fases: [

    // Inicio
    {
      texto: "Esta é a aventura de Mimi, uma aventureira na classe de Mago Negro, que controla poderosas magias destrutivas. Um dia na guilda de aventureiros, ela ouve a história sobre um grande tesouro em uma perigosa masmorra. Interessada pela história, ela apanha seu cajado mágico e corre em direção à sua jornada! Primeiro, ela deve passar pela floresta Mor'Thesserta para alcançar a masmorra. Andando pela floresta, um grande golem de pedra aparece e avista ela. Ele fixa seu olhar nela e começa a avançar, preparado para atacar. Mimi deve agir rápido para se defender, mas qual magia usar?!",
      opcoes: [
        { texto: "A) Pare-o com gelo!", proximaFase: 1 },
        { texto: "B) Derrote-o com fogo!", proximaFase: 2 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 1
    {
      texto: 'Mimi conjura gelo nos pés do golem, congelando suas pernas e parando seu avanço. "Fica frio aí!" Ela diz, antes de disparar espinhos de gelo nele, destruindo o golem. Ela comemora sua vitória e continua em frente...',
      opcoes: [
        { texto: "Continuar...", proximaFase: 3 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },

    // 2
    {
      texto: 'Mimi conjura uma bola de fogo e a arremessa na direção do golem. Ele é rapidamente derrotado com a explosão, caindo em pedaços no chão. "Hahaha! Você não tinha chance!" Mimi diz orgulhosamente, antes de perceber que a floresta está em chamas... Ela não pode continuar e foge do incêndio, voltando para casa derrotada...',
      opcoes: [
        { texto: "Fim de Jogo...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 3
    {
      texto: "Após mais alguns minutos de caminhada, Mimi vê um misterioso templo na floresta, coberto de vinhas e musgo. Ela se aproxima da porta e tenta empurrá-la, mas sem sucesso. Ela olha em sua volta e percebe que há um pequeno buraco na parede, e provavelmente consegue passar por ele. O que ela deveria fazer?",
      opcoes: [
        { texto: "A) Procurar um mecanismo na parede.", proximaFase: 4 },
        { texto: "B) Tentar entrar pelo buraco.", proximaFase: 5 },
        { texto: "C) Explodir a porta!", proximaFase: 6 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 4
    {
      texto: "Mimi cautelosamente investiga a parede, examinando os tijolos, até que ela consegue empurrar um deles. O templo começa a tremer e a porta abre lentamente. Um esqueleto aguarda dentro do templo, ele é alertado pela porta se abrindo e atira uma flecha na direção de Mimi. Ela é acertada e perde 1 ponto de vida, mas consegue disparar um raio no esqueleto, transformando-o numa pilha de ossos...",
      opcoes: [
        { texto: "Continuar... (-1 ponto de vida)", proximaFase: 7 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 5
    {
      texto: "Mimi se agaixa perto do buraco, rastejando pela pequena abertura. Ela tem um pouco de dificuldade, mas consegue entrar no templo. Um esqueleto aguarda na sala, mas ele ainda não notou ela. A maga dispara um raio no esqueleto, que é pego desprevinido e facilmente destruído...",
      opcoes: [
        { texto: "Continuar...", proximaFase: 7 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 6
    {
      texto: "Bem pensado! Pirotecnia nunca falha! Ela triunfantemente atira uma bola de fogo no templo, o que certamente abre a porta, mas também desaba o templo. Ela não pode continuar, e retorna à sua casa, derrotada...",
      opcoes: [
        { texto: "Fim de jogo...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 7
    {
      texto: "Explorando o templo, Mimi se depara com uma sala nas profundezas que contém 2 baús. Um dos baús está no centro da sala, cuidadosamente colocado em um pedestal. O outro está no canto da sala, coberto por algumas. Provavelmente há uma armadilha em um deles, então ela decide...",
      opcoes: [
        { texto: "A) Abrir o baú no pedestal.", proximaFase: 8 },
        { texto: "B) Abrir o baú no canto da sala.", proximaFase: 9 },
        { texto: "C) Explodir os baús...?", proximaFase: 10 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 8
    {
      texto: "Mimi hesitantemente abre o baú no pedestal, esperando por uma armadilha óbvia. Para sua surpresa, nada acontece. O baú era verdadeiro e ela pode pegar o tesouro, saindo da sala antes que algo tente pará-la...",
      opcoes: [
        { texto: "Continuar...", proximaFase: 11 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 9
    {
      texto: "O baú no centro da sala é chamativo demais, Mimi decide abrir o baú no canto da sala. Ela se aproxima do baú e tenta abri-lo, mas era um mímico! O monstro tenta engolir ela, mas ela usa uma explosão dentro da boca do monstro e o derrota, porém ela perde 1 ponto de vida pois estava muito próxima. Ela abre o outro baú, pega o tesouro dentro dele, e sai da sala...",
      opcoes: [
        { texto: "Continuar... (-1 ponto de vida)", proximaFase: 11 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 10
    {
      texto: "Por que arriscar cair numa armadilha tão óbvia? Os dois baús sofrerão sua fúria! Mimi conjura uma explosão para destruir o baú no pedestal e então conjura outra no baú solitário. Ele era um mímico e seu exterior resistente o protegeu da explosão, mas ele ficou muito irritado! Ele dá uma investida na direção de Mimi, nocauteando-a, antes de engolir a pobre aventureira...",
      opcoes: [
        { texto: "Fim de jogo...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 11
    {
      texto: "Mimi sai do templo com seu tesouro, um cristal de luz com grande potencial mágico que pode amplificar os poderes de qualquer aventureiro. Ela se prepara para retornar para a guilda, mas um dragão pousa na sua frente, e solta um forte rugido. Ele é o guardião do templo, e não vai deixar que ela fuja tão facilmente! Este é o obstáculo final, Mimi deve passar pelo dragão se quiser levar o tesouro. Ela decide...",
      opcoes: [
        { texto: "A) Enfrentar com o dragão!", proximaFase: 12 },
        { texto: "B) Devolver o tesouro e se desculpar.", proximaFase: 13 },
        { texto: "C) Tentar se teleportar para longe.", proximaFase: 14 },
        { texto: "D) Usar o cristal para conjurar uma enorme explosão!", proximaFase: 15 }
      ]
    },
    
    // 12
    {
      texto: "Mimi foca seu olhar no dragão, preparando-se para uma grande batalha. Ela dispara magias no dragão, tentando o seu melhor para desviar do dragão cuspindo fogo em sua direção, porém recebe alguns ferimentos... Após uma longa batalha, ela dispara um último feitiço no dragão, finalmente derrubando a fera. Uma grande batalha, e ela sai vitoriosa com seu tesouro! A aventureira volta orgulhosa à cidade, completando sua missão e recebendo uma grande recompensa!",
      opcoes: [
        { texto: "Final Bom - Missão Completa!", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 13
    {
      texto: "Aterrorizada pelo enorme dragão, Mimi decide que sua melhor escolha é abandonar o tesouro, esperando que o dragão a deixe ir embora... Ela coloca o cristal no chão cuidadosamente e se curva diante da besta, desculpando-se. O dragão pega o cristal com sua boca e voa para longe, deixando a aventureira em paz. Mimi suspira aliviada e retorna à sua casa, porém sem nenhum espólio de sua jornada...",
      opcoes: [
        { texto: "Final Neutro 1 - Retornou sem o tesouro...", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 14
    {
      texto: "Mimi observa o dragão atentamente, concentrando-se em conjurar uma magia para se teletransportar para longe e fugir do monstro. O dragão perde a paciência e tenta a atacar, mas ela desaparece momentos antes do golpe acertá-la. Ela reaparece próxima à guilda de aventureiros, olhando em sua volta, antes de correr orgulhosa para completar sua missão. Ela entrega o tesouro e leva sua recompensa, porém momentos após sair da guilda, o dragão reaparece, atacando a cidade para recuperar o cristal. Em meio às chamas e destruição, ela foje novamente, envergonhada pelo caos que sua decisão causou.",
      opcoes: [
        { texto: "Final Ruim - Donzela da Ruína", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 15
    {
      texto: '"É sério? Outra explosão?" Mimi pensa para si mesma, olhando para o cristal de luz em suas mãos, antes de respirar fundo e juntar sua coragem. Ela foca seus poderes, utilizando o cristal como catalista para canalizar a magia mais poderosa possível. Ela dá um passo para trás e começa a recitar um canto... "Mais escuro que o negro, mais sombrio que a escuridão..." Ela sussurra, uma quantidade enorme de poder concentrando-se em suas mãos. O dragão começa a ficar impaciente, ele sai do chão, preparando-se para cuspir fogo na direção da aventureira, mas Mimi abre seus olhos derrepente, completando sua conjuração e olhando para o dragão desafiadoramente. "Explooooosão!" Ela grita, disparando a magia no dragão. Ele é acertado, e uma enorme bola de chamas surge do ponto de impacto, vaporizando-o instantaneamente. A força do vento causado quase a arremessa, mas ela finca seu cajado no chão para manter-se firme. A esfera de fogo no ar começa a desaparecer, por sorte, as chamas não alcançaram as árvores. Mimi retorna orgulhosa à cidade, decidindo guardar o poderoso cristal de luz para si mesma, tornando-se a aventureira mais forte da história.',
      opcoes: [
        { texto: "Final Secreto! - Guerreira da Luz", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    },
    
    // 16
    {
      texto: 'Apesar de suas feridas, Mimi decide enfrentar o dragão, ignorando a dor e preparando-se para atacar. Ela dispara magias no dragão, fazendo seu melhor para derrotá-lo. Ela tenta desviar de seus ataques, mas os ferimentos atrasam os movimentos dela... Com um último feitiço, ela consegue derrotar o dragão, mas sofrendo grandes danos na batalha... Ela observa triunfante enquanto o dragão cai, derrotado. O efeito da adrenalina em seu corpo passa, e ela cai no chão, derrotada. O dragão foi morto, mas a custo de sua própria vida...',
      opcoes: [
        { texto: "Final Neutro 2 - Mártir", proximaFase: -1 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 },
        { texto: "", proximaFase: 0 }
      ]
    }   

  ]
};
