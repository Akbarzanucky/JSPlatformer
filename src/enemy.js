export default class Enemy{
    constructor(gameWidth, gameHeight){
        this.width=30;
        this.height= 30;
        this.gameWidth = gameWidth;

        this.position = {
            x: gameWidth/2 - this.width/2,
            y: gameHeight - this.height
        }

        this.maxSpeed = 5;
        this.speed = 0;

    }
    
    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(dt){
        if(!dt) return;
        this.position.x -= 3;

        if(this.position.x < 0){
            let rH = Math.floor(Math.random() * 800) + 50;
            console.log(rH)
            
            // this.position.y = this.gameHeight - this.height;
            this.height = rH;
            this.position.x = this.gameWidth - this.width;
        }
    }
}
