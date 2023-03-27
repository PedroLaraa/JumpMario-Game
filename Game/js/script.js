
const mario = document.querySelector('.mario');

const gameOver = document.querySelector('.game-over');

const pipe = document.querySelector('.pipe');

const clouds = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation= 'none'
        clouds.style.left= `${cloudsPosition}px`

        gameOver.src = "./images/game_over.png"
        gameOver.style.width = '80px'
        gameOver.style.marginLeft = '50px'
        gameOver.style.display = 'inline'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '3'

        mario.src = "./images/mario-over.png"
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'


        clearInterval(loop)
    };

}, 10);

document.addEventListener('keydown', jump);
