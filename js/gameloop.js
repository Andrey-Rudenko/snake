function gameloop() {
    //Отчищаем холст
    draw.clearRect(0,0,2000,1000);
    draw.fillStyle = "black";
    draw.fillRect(0,0,2000,1000);
    //Текст бегущей надписи
    record = localStorage.getItem('recordKey');
    if (localStorage.getItem('recordKey') == null) {
        names = 'SnakeTheGame';
    }
    else {
        names = `BEST SCORE = ${record}`;
    }
    //scorebar
    draw.fillStyle = "GreenYellow";
    draw.fillText(names, fedyaX, 343);
    draw.fillStyle = "black";
    draw.fillRect(0,305,200,45);

    draw.fillStyle = "GreenYellow";
    draw.fillRect(0,300,600,6)
    draw.font = "35px impact";
    draw.fillText("SCORE", 40, 343);
    draw.fillText(score, 160, 343);
    draw.fillText(':', 140, 339);
    draw.fillRect(200,305,5,50);
    //Движение надписи
    fedyaX -=1;
    if (fedyaX == -100) {
        fedyaX = 630;
    }
    //Флаг смерти
    if (stop == false) {
        //Спавним змейку
        for(i = 0; i < snakeMassive.length; i += 1) {
            snakeMassive[i].spawn();
        }
        //Таймер
        if (frame < timeX) {
            frame ++;
        } 
        else {
            frame = 0;
        }
        if (frame == timeX) {
            //Прописываем повороты и движение змейки
            go(dir, snakeMassive);
        }
        
        //Cпавним еду
        b.foods();
        //Телепорт
        telep(snakeMassive);
        //Проверка на столкновение
        if (snakeMassive[snakeMassive.length-1].snakeX == b.x_blocks && snakeMassive[snakeMassive.length-1].snakeY == b.y_blocks) {
            score +=1;  //очки
            //Увеличение змеки и спавн новой еды
            a = new snake; 
            a.snakeX = b.x_blocks;
            a.snakeY = b.y_blocks;
            snakeMassive.push(a);
            b = new blocks; 
            //проверяем на спавн внутри змейки
            check(snakeMassive,b);
        }
    }
    //Прописываем смерть 
    for(i = 0; i < snakeMassive.length-2; i += 1) {
        if (snakeMassive[snakeMassive.length-1].snakeX == snakeMassive[i].snakeX && snakeMassive[snakeMassive.length-1].snakeY == snakeMassive[i].snakeY) {
            stop = true;
    }
    }
    if (stop == true){
        //Сообщение о смерти 
        alert(`Вы проиграли(\nВаш счет равен: ${score}`);
        //Новый рекорд
        if (score > record) {
            localStorage.setItem('recordKey', score);
            names = record;
            console.log(localStorage.getItem('recordKey'));
            alert("Поздравляем, вы побили свой рекорд!!!");
        }       
        startData();
    }
    requestAnimationFrame(gameloop);
}