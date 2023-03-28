
const mario = document.querySelector('.mario');

const gameOver = document.querySelector('.game-over');

const pipe = document.querySelector('.pipe');

const clouds = document.querySelector('.clouds')

let jogoEmAndamento = true

let onAir = false

const jump = () => {

    if (onAir === false) {
        mario.classList.add('jump');
        onAir = true;
    }

    setTimeout(() => {
        mario.classList.remove('jump');
        onAir = false;
    }, 500)
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudsPosition = clouds.offsetLeft;

    console.log(marioPosition, pipePosition)

    let placar = +document.getElementById('placar').innerHTML

    // HACK FOR THE GAME, AUTOMATIC JUMPS
    // if (pipePosition <= 170) {
    //     jump()
    // }

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        gameOver.src = "./images/game_over.png"
        gameOver.style.width = '80px'
        gameOver.style.marginLeft = '50px'
        gameOver.style.display = 'inline'
        gameOver.style.position = 'absolute'
        gameOver.style.zIndex = '3'

        mario.src = "./images/mario-over.png"
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'


        clearInterval(loop);

    } else if (marioPosition >= 80 && pipePosition < 120) {

        const point = setInterval(() => {

            document.getElementById('placar').innerHTML = placar + 10;
            clearInterval(point);

        }, 500);
    };

}, 10);

document.addEventListener('keydown', jump);
