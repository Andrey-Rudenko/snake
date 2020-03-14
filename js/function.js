//Рандом
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//keycode
function direction(event) {
  if(event.keyCode == 37 && dir != "right" && flag == 0) {
    dir = "left";
    flag = 1;}
  else if(event.keyCode == 38 && dir != "down" && flag == 0){
    dir = "up";
    flag = 1;}
  else if(event.keyCode == 39 && dir != "left" && flag == 0){
    dir = "right";
    flag = 1;}
  else if(event.keyCode == 40 && dir != "up" && flag == 0){
    dir = "down";
    flag = 1;}
}

//Первичные координаты змейки 
function snakeInd(snakeMassive) {
  for(i = 0; i <= 4; i += 1) {
      let a = new snake;
      snakeMassive.push(a);
  }
  for(i = 0; i <= 4; i += 1) {
      snakeMassive[i].snakeX += 25 * i;
  }
  return(snakeMassive)
  }

  //Движение 
  function go(dir, snakeMassive) {
    if (dir == "right") {
        snakeMassive[0].snakeY = snakeMassive[snakeMassive.length-1].snakeY;
        snakeMassive[0].snakeX = snakeMassive[snakeMassive.length-1].snakeX + 25;
        snakeMassive.push(snakeMassive[0]);
        snakeMassive.splice(0, 1);
        flag = 0
    }
    if (dir == "left") {
        snakeMassive[0].snakeY = snakeMassive[snakeMassive.length-1].snakeY;
        snakeMassive[0].snakeX = snakeMassive[snakeMassive.length-1].snakeX - 25;
        snakeMassive.push(snakeMassive[0]);
        snakeMassive.splice(0, 1);
        flag = 0
    }
    if (dir == "down") {
        snakeMassive[0].snakeX = snakeMassive[snakeMassive.length-1].snakeX;
        snakeMassive[0].snakeY = snakeMassive[snakeMassive.length-1].snakeY + 25;
        snakeMassive.push(snakeMassive[0]);
        snakeMassive.splice(0, 1);
        flag = 0
    }
    if (dir == "up") {
        snakeMassive[0].snakeX = snakeMassive[snakeMassive.length-1].snakeX;
        snakeMassive[0].snakeY = snakeMassive[snakeMassive.length-1].snakeY - 25;
        snakeMassive.push(snakeMassive[0]);
        snakeMassive.splice(0, 1);
        flag = 0
    }
    return(snakeMassive,flag)
    }

    //Прохождение сквозь экран 
    function telep(snakeMassive) {
      for(i = snakeMassive.length-1; i >= 0; i -= 1) {
          if(snakeMassive[i].snakeX == 600) {
              snakeMassive[i].snakeX = 0
          }
      }
      //вверх
      for(i = snakeMassive.length-1; i >= 0; i -= 1) {
          if(snakeMassive[i].snakeY == -25) {
              snakeMassive[i].snakeY = 275
          }
      }
      //Влево
      for(i = snakeMassive.length-1; i >= 0; i -= 1) {
          if(snakeMassive[i].snakeX == -25) {
              snakeMassive[i].snakeX = 575
          }
      }
      //Вниз
      for(i = snakeMassive.length-1; i >= 0; i -= 1) {
          if(snakeMassive[i].snakeY == 300) {
              snakeMassive[i].snakeY = 0
          }
      }
  return(snakeMassive)
  }

  //Проверка спавна в змее(не работает)
  function check(snakeMassive,b) {
    for(i = 0; i < snakeMassive.length-1; i += 1) {
        if (snakeMassive[i].snakeX == b.x_blocks) {
            if(snakeMassive[i].snakeY == b.y_blocks){
                while (snakeMassive[i].snakeX == b.x_blocks && snakeMassive[i].snakeY == b.y_blocks) {
                        b.x_blocks = 25 * getRandomInt(0, 20)
                        b.y_blocks = 25 * getRandomInt(0, 10)
                        console.log(1)
                }
            }
        }
    }
    return(b)
}


function startData() {
    snakeMassive = [];
    snakeInd(snakeMassive);
    stop = false;
    dir = "right";
    score = 0;
    return(snakeMassive, stop,dir,score)
    }