
export default class inputHandler{
    constructor(paddle){
        document.addEventListener('keydown', (event) =>{
            switch(event.key){
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;

                case 'ArrowRight':
                    paddle.moveRight();
                    break;

                case 'ArrowUp':
                    paddle.jump(-0.2);
                    break;
            }
        });
        
        document.addEventListener('keyup', (event) => {
            switch(event.key){
                case 'ArrowLeft':
                    if(paddle.speed<0) { paddle.stop(); }
                    break;

                case 'ArrowRight':
                    if(paddle.speed>0) { paddle.stop(); }
                    break;
                case 'ArrowUp':
                    paddle.jump(0.1);
                    break;
            }
        });
    }
}