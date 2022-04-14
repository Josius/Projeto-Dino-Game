const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

let position = 0;

function handleKeyUp(event) {
    // console.log('pressionou uma tecla'); 
    if (event.keyCode == 32) {
        // console.log('Pressionou espaçú!')
        if (!isJumping) {
            jump();
        }
    }
}

// function handleKeyLeft(event) {
//     if (event.keyCode == 68) {
//         walkRight();
//     }
// }

function jump() {

    isJumping = true;
    //a função abaixo
    let upInterval = setInterval(() => {
        if (position >= 150) {
            //descendo
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);//20ms
}

// function walkRight(){
//     let positionR = 0;

//     let rightInterval = setInterval(() => {
//         positionR -= 20;

//         dino.style.right = position + 'px';
//     }, 20);
// }

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = 1000 + 'px';

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game Over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo mané, vc perdeu, Game Over!</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);

/* 
<event> -> argumento que é enviado para a função tda vez que uma tecla é pressionada pelo navegador, logo, com ele poderemos identificar qual tecla está sendo pressionada

<event.keyCode == 32> -> verifica se é a tecla espaço

keycode.info -> mostra quais são os códigos para as teclas

setInterval => define intervalos de execução de código

clearInterval(upInterval) -> limpa o intervalo, fazendo a img voltar a sua posicao inicial

*.document.createElement('div'); -> cria uma div nova no html
*.classList.add('*') -> nomeia a <div> com uma classe
background.appendChild(*); -> pega o background e add um filho

setTimeout() -> executa uma função dps de um determinado tempo


*/