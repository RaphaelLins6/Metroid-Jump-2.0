const metroid = document.querySelector('.metroid');
const cano = document.querySelector('.cano');
const pontuacao = document.querySelector(".pontuacao");
let count = 0;
const gameOverScreen = document.querySelector('.game-over-screen');
const gameOverImage = document.querySelector('.game-over-image');
const gameOveButton = document.querySelector('.game-over-button');

const jump = () => {
  metroid.classList.add('jump');

  setTimeout(() => {
    metroid.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const canoPosicao = cano.offsetLeft;
  const metroidPosicao = +window.getComputedStyle(metroid).bottom
  .replace('px', '');

  if (canoPosicao <= 120 && canoPosicao > 0 && metroidPosicao < 80) {
    cano.style.animation = 'none';
    cano.style.left = `${canoPosicao}px`;

    metroid.style.animation = 'none';
    metroid.style.bottom  = `${metroidPosicao}px`;

    metroid.src = './src/assets/imagens/gameover.webp';
    metroid.style.width = '75px';
    metroid.style.bottom  = '50px';

    function showModal(score) {
      document.getElementById("myModal").style.display = "block";
      document.getElementById("score").textContent = score;
    }
    
    // Chamar a função quando quiser mostrar o modal
    showModal(count);

        // Seleciona o elemento "X"
    const closeButton = document.querySelector('.close');

    // Função para fechar o modal
    function closeModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
    }

    // Adiciona o ouvinte de evento de clique ao botão de fechar
    closeButton.addEventListener('click', closeModal);

    clearInterval(loop); 
    
    // Mostrar a tela de game over
    gameOverScreen.style.display = 'flex';

    // Ocultar outros elementos (opcional)
    // gameBoard.style.display = 'none';

    // Centralizar a imagem (ajuste as classes conforme sua estrutura HTML)
    gameOverImage.style.position = 'absolute';
    gameOverImage.style.top = '50%';
    gameOverImage.style.left = '50%';
    gameOverImage.style.transform = 'translate(-50%, -50%)';
    
    const imageHeight = gameOverImage.offsetHeight;
    const buttonMarginBottom = imageHeight / 2 - 280;

    gameOveButton.style.position = 'absolute';
    gameOveButton.style.bottom = buttonMarginBottom + 'px';
    gameOveButton.style.left = '50%';
    gameOveButton.style.transform = 'translate(-50%, 0)';
    // Adiciona o evento de clique para reiniciar o jogo
    gameOveButton.addEventListener('click', () => {  
    location.reload();
    });
    } 
    
  count++;
  pontuacao.innerHTML = `Pontuação: ${count}`;
}, 10);


document.getElementById('startGameButton').addEventListener('click', () => {
document.querySelector('.initial-screen').style.display = 'none';
document.querySelector('.game-board').style.display = 'block';
});

document.addEventListener('keydown', jump);