# Metroid-Jump-2.0
🕹️  O objetivo principal do jogo é simples: correr o máximo que conseguir sem colidir com os obstáculos.

🕹️ The main objective of the game is simple: run as far as you can without colliding with obstacles.

## Stack utilizada | Stack used
**Front-end:** VS Code | HTML e CSS

**Back-end:** VS Code | Javascript

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Documentação

## Introdução
- Este código busca criar um jogo simples, mas desafiador, inspirado no clássico jogo do dinossauro do Chrome, mas com uma temática Metroid. 
A ideia é transportar o jogador para um universo sci-fi, onde um robô (o metroid) precisa saltar entre plataformas para evitar obstáculos em uma corrida sem fim.

- This code seeks to create a simple but challenging game, inspired by the classic Chrome dinosaur game, but with a Metroid theme. 
The idea is to transport the player to a sci-fi universe, where a robot (the metroid) needs to jump between platforms to avoid obstacles in an endless race.

## METODOLOGIA
- O código segue uma metodologia procedural típica para jogos simples em JavaScript.
A lógica do jogo é dividida em funções distintas, que são chamadas em uma sequência específica para controlar o fluxo do game.

- Principais Etapas:

🚀 Inicialização:

• Seleciona os elementos HTML que serão manipulados.
• Define variáveis globais para armazenar informações como a pontuação e os elementos do jogo.
• Configura eventos para interagir com o usuário, como o clique para iniciar o jogo e a tecla de espaço para pular.

🛸 Loop Principal:

• A função loop é executada repetidamente em intervalos regulares (definidos pelo setInterval).
• Atualiza a posição dos elementos do jogo (metroid e obstáculos) a cada iteração.
• Verifica se houve colisão entre o metroid e um obstáculo.
• Atualiza a pontuação.
• Exibe a tela de game over quando a colisão ocorre.

🚀 Gerenciamento de Eventos:

• O código responde a eventos do usuário, como o clique no botão "Iniciar" e a tecla de espaço.
• Esses eventos desencadeiam ações específicas, como iniciar o jogo ou fazer o metroid pular.

🛸 Renderização:

• A cada iteração do loop, o DOM é atualizado para refletir as mudanças no estado do jogo, como a posição dos elementos e a pontuação.

🚀 Técnicas Específicas Utilizadas

• Manipulação do DOM: O JavaScript interage diretamente com o DOM (Document Object Model) para modificar a aparência e o comportamento dos elementos HTML na página.
• Animação CSS: As animações do metroid e dos obstáculos são realizadas utilizando propriedades CSS e a classe jump.
• Deteção de Colisões: A colisão é detectada comparando as posições dos elementos metroid e obstáculo.
• Temporizadores: O setInterval é usado para criar um loop que executa o jogo a cada intervalo de tempo, criando a sensação de movimento.
• Eventos: Os eventos click e keydown são utilizados para capturar as interações do usuário.

## Resultados
- As operações realizadas dentro do loop são principalmente comparações (para detectar colisões) e atualizações de posições, que são operações de tempo constante (O(1)).
Considerando esses fatores, a complexidade de tempo do algoritmo principal é O(1) por iteração.
Isso significa que o tempo de execução de cada iteração do loop não aumenta significativamente com o aumento do tamanho da entrada (neste caso, a entrada seria a posição dos elementos na tela).

No entanto, é importante considerar:

- Intervalos de Tempo: A frequência do loop (definida pelo setInterval) influencia diretamente no desempenho do jogo. Intervalos menores resultam em uma animação mais suave, mas também aumentam a carga de processamento.

## Discussão
- Estrutura do Código:

O código JavaScript define as seguintes funcionalidades:

• Elementos HTML: Seleciona os elementos HTML que representam o metroid, os obstáculos (canos), a pontuação, a tela de game over e outros elementos da interface.
• Mecânica de pulo: A função jump adiciona uma classe CSS para animar o pulo do metroid.
• Loop do jogo: A função loop é responsável por:
    Atualizar a posição dos obstáculos e do metroid a cada intervalo de tempo.
    Verificar se houve colisão entre o metroid e um obstáculo.
    Atualizar a pontuação.
    Mostrar a tela de game over quando ocorre uma colisão.
• Tela de game over: A função showModal exibe um modal com a pontuação final e oferece um botão para reiniciar o jogo.
• Início do jogo: Um evento de clique no botão "Iniciar" oculta a tela inicial e inicia o loop do jogo.
• Controle do jogador: A tecla de espaço é utilizada para fazer o metroid pular.

Conceitos de Programação:

• Manipulação do DOM: O código interage com os elementos HTML para criar a interface do jogo e atualizar os elementos dinamicamente.
• Eventos: São utilizados eventos como click e keydown para responder às ações do usuário.
• Animações CSS: As animações do metroid e dos obstáculos são feitas utilizando CSS.
• Temporizadores: O setInterval é usado para criar um loop que atualiza o jogo a cada intervalo de tempo.
• Deteção de colisões: O código verifica a posição do metroid e dos obstáculos para determinar se houve uma colisão.

## Conclusão
- Em resumo, a análise do código do Metroid Jump nos permite concluir que:
É simples e eficiente, o jogo, apesar de sua simplicidade, demonstra uma boa aplicação de conceitos básicos de programação. A estrutura do código é clara e a lógica é fácil de seguir.
Sua complexidade Adequada: A complexidade do algoritmo é baixa (O(1) por iteração), o que o torna eficiente para um jogo com essas características. Isso significa que o tempo de execução não aumenta significativamente com o aumento do tamanho da entrada (neste caso, a quantidade de obstáculos na tela).
Embora o código seja funcional, há sempre espaço para melhorias. A introdução de conceitos mais avançados, como motores de física, sistemas de partículas e inteligência artificial, poderia tornar o jogo mais sofisticado e realista.
O código serve como um excelente ponto de partida para aqueles que desejam aprender a desenvolver jogos simples em JavaScript. Ele demonstra como aplicar conceitos como manipulação do DOM, animação, detecção de colisões e eventos.
Considerando os aspectos analisados, podemos destacar os seguintes pontos-chave:

• Metodologia Procedural: A estrutura procedural utilizada é adequada para jogos simples, mas pode se tornar mais complexa em projetos maiores.
• Otimização: O código pode ser otimizado para melhorar o desempenho, especialmente em dispositivos com menor capacidade de processamento.
• Extensibilidade: O código pode ser facilmente expandido para incluir novas funcionalidades, como diferentes tipos de obstáculos, power-ups e níveis.
Em conclusão, o Metroid Jump é um exemplo prático de como aplicar conceitos de programação para criar jogos simples e divertidos. A análise do código demonstrou que a escolha de algoritmos eficientes e a organização do código são fundamentais para o desenvolvimento de jogos de qualidade.

Possíveis Próximos Passos:

• Explorar diferentes frameworks de jogos: Frameworks como Phaser ou Unity podem simplificar o desenvolvimento de jogos mais complexos.
• Implementar um sistema de níveis: Adicionar diferentes níveis com desafios crescentes para aumentar a longevidade do jogo.
• Criar um sistema de pontuação: Implementar um sistema de pontuação para motivar os jogadores a alcançar altas pontuações.

## REFERÊNCIAS BIBLIOGRÁFICAS
• https://www.youtube.com/watch?v=RZ3D39UzqZs&t=1538s
• https://www.youtube.com/watch?v=r9buAwVBDhA&t=1667s

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Documentation

## Introduction
- This code seeks to create a simple but challenging game, inspired by the classic Chrome dinosaur game, but with a Metroid theme. 
The idea is to transport the player to a sci-fi universe, where a robot (the metroid) needs to jump between platforms to avoid obstacles in an endless race.

- This code seeks to create a simple but challenging game, inspired by the classic Chrome dinosaur game, but with a Metroid theme. 
The idea is to transport the player to a sci-fi universe, where a robot (the metroid) needs to jump between platforms to avoid obstacles in an endless race.

## METHODOLOGY
- The code follows a typical procedural methodology for simple JavaScript games.
The game logic is divided into distinct functions, which are called in a specific sequence to control the flow of the game.

- Main Steps:

🚀 Startup:

• Selects the HTML elements that will be manipulated.
• Defines global variables to store information such as score and game elements.
• Configures events to interact with the user, such as clicking to start the game and the space key to jump.

🛸 Main Loop:

• The loop function is executed repeatedly at regular intervals (defined by setInterval).
• Updates the position of game elements (metroid and obstacles) with each iteration.
• Checks if there was a collision between the metroid and an obstacle.
• Updates the score.
• Displays the game over screen when the collision occurs.

🚀 Event Management:

• The code responds to user events such as clicking the "Start" button and pressing the space bar.
• These events trigger specific actions, such as starting the game or making the metroid jump.

🛸 Rendering:

• At each iteration of the loop, the DOM is updated to reflect changes in the game state, such as the position of elements and the score.

🚀 Specific Techniques Used

• DOM Manipulation: JavaScript interacts directly with the DOM (Document Object Model) to modify the appearance and behavior of HTML elements on the page.
• CSS Animation: The animations of the metroid and obstacles are performed using CSS properties and the jump class.
• Collision Detection: Collision is detected by comparing the positions of the metroid and obstacle elements.
• Timers: The setInterval is used to create a loop that runs the game at each time interval, creating the sensation of movement.
• Events: The click and keydown events are used to capture user interactions.

## Results
- The operations performed inside the loop are mainly comparisons (to detect collisions) and position updates, which are constant time operations (O(1)). Considering these factors, the time complexity of the main algorithm is O(1) per iteration.
This means that the execution time of each iteration of the loop does not increase significantly with increasing input size (in this case, the input would be the position of the elements on the screen).

However, it is important to consider:

- Time Intervals: The loop frequency (defined by setInterval) directly influences the game's performance. Smaller intervals result in smoother animation, but also increase the processing load.

## Discussion
- Code Structure:

The JavaScript code defines the following features:

• HTML elements: Selects the HTML elements that represent the metroid, obstacles (pipes), score, game over screen, and other interface elements.
• Jump mechanics: The jump function adds a CSS class to animate the metroid's jump.
• Game loop: The loop function is responsible for:
Updating the position of the obstacles and the metroid every time interval.
Checking whether there was a collision between the metroid and an obstacle.
Updating the score.
Showing the game over screen when a collision occurs.
• Game over screen: The showModal function displays a modal with the final score and provides a button to restart the game.
• Game start: A click event on the "Start" button hides the start screen and starts the game loop.
• Player control: The space bar is used to make the metroid jump.

Programming Concepts:

• DOM Manipulation: The code interacts with HTML elements to create the game interface and dynamically update the elements.
• Events: Events such as click and keydown are used to respond to user actions.
• CSS Animations: The animations of the metroid and obstacles are done using CSS.
• Timers: The setInterval is used to create a loop that updates the game every time interval.
• Collision Detection: The code checks the position of the metroid and obstacles to determine if there has been a collision.

## Conclusion
- In summary, the analysis of the Metroid Jump code allows us to conclude that:
It is simple and efficient, the game, despite its simplicity, demonstrates a good application of basic programming concepts. The code structure is clear and the logic is easy to follow.
Its complexity is Adequate: The complexity of the algorithm is low (O(1) per iteration), which makes it efficient for a game with these characteristics. This means that the execution time does not increase significantly with the increase in the input size (in this case, the number of obstacles on the screen).
Although the code is functional, there is always room for improvement. The introduction of more advanced concepts, such as physics engines, particle systems and artificial intelligence, could make the game more sophisticated and realistic.
The code serves as an excellent starting point for those who want to learn how to develop simple games in JavaScript. It demonstrates how to apply concepts such as DOM manipulation, animation, collision detection and events.
Considering the aspects analyzed, we can highlight the following key points:

• Procedural Methodology: The procedural structure used is suitable for simple games, but can become more complex in larger projects.
• Optimization: The code can be optimized to improve performance, especially on devices with lower processing power.
• Extensibility: The code can be easily expanded to include new features, such as different types of obstacles, power-ups, and levels.

In conclusion, Metroid Jump is a practical example of how to apply programming concepts to create simple and fun games. The code analysis demonstrated that choosing efficient algorithms and organizing the code are fundamental to developing quality games.

Possible Next Steps:

• Explore different game frameworks: Frameworks such as Phaser or Unity can simplify the development of more complex games.
• Implement a level system: Add different levels with increasing challenges to increase the longevity of the game.
• Create a scoring system: Implement a scoring system to motivate players to achieve high scores.

## BIBLIOGRAPHICAL REFERENCES
• https://www.youtube.com/watch?v=RZ3D39UzqZs&t=1538s
• https://www.youtube.com/watch?v=r9buAwVBDhA&t=1667s
