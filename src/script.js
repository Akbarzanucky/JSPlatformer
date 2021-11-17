import Paddle from '/src/paddle.js';
import inputHandler from '/src/input.js';
import Enemy from '/src/enemy.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let enemy = new Enemy(GAME_WIDTH, GAME_HEIGHT);

new inputHandler(paddle);

paddle.draw(ctx);
enemy.draw(ctx);

let lastTime=0;

function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    let rH = Math.floor(Math.random() * 300) + 1;
    enemy.draw(ctx, rH);
    enemy.update(deltaTime);

    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop)

