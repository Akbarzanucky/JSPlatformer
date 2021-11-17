export default class Paddle{
    constructor(gameWidth, gameHeight){
        this.width=30;
        this.height=50;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.position = {
            x: gameWidth/8 - this.width - 10,
            y: gameHeight/2
        }

        this.maxSpeed = 5;
        this.maxSpeedY = 5;
        this.speed = 0;
        this.speedY = 0;
        this.gravitySpeed = 0;
        this.gravity = 0.05;

    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.speed = this.maxSpeed;
    }
    
    jump(n){
        this.gravity = n;
    }

    stop(){
        this.speed = 0;
        this.speedY = 0;
    }

    draw(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(dt){
        this.position.x += this.speed; 
        this.gravitySpeed += this.gravity;
        this.position.y += this.speedY + this.gravitySpeed;

        if(this.position.x < 0){
            this.position.x = 0;
        }

        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }

        if(this.position.y > this.gameHeight - this.height){
            this.position.y = this.gameHeight - this.height;
        }
    }
}