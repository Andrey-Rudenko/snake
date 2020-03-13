//Класс змейки
class snake {
    constructor(){
        this.width = 25;
        this.height = 25;
        this.snakeX = 50;
        this.snakeY = 100;
        this.color = "green";
    }
    spawn() {
        draw.fillStyle = this.color
        draw.fillRect(this.snakeX,this.snakeY,this.width,this.height);
    }
}      


//Класс еды
class blocks {
    constructor() {
            this.x_blocks = 25 * getRandomInt(0, 20)
            this.y_blocks = 25 * getRandomInt(0, 10)
            this.width_blocks = 25
            this.height_blocks = 25
    }
    foods() {
            draw.fillStyle = "red";
            draw.fillRect(this.x_blocks ,this.y_blocks,this.width_blocks,this.height_blocks)
        }
    death() {
        draw.fillStyle = "blue";
        draw.fillRect(this.x_blocks ,this.y_blocks,this.width_blocks,this.height_blocks)
    }
                
}