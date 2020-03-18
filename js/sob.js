//Кнопка вверх
let blockUp = document.getElementById('up');
blockUp.onclick = function(){
    if (dir != 'down'  && flag == 0) {
        dir = "up";
        flag = 1;
    }
}
//Кнопка вниз
let blockDown = document.getElementById('down');
blockDown.onclick = function(){
    if (dir != 'up'  && flag == 0) {
        dir = "down";
        flag = 1;
    }
}
//Кнопка вправо
let blockRight = document.getElementById('right');
blockRight.onclick = function(){
    if (dir != 'left'  && flag == 0) {
        dir = "right";
        flag = 1;
    }
}
//Кнопка влево 
let blockLeft = document.getElementById('left');
blockLeft.onclick = function(){
    if (dir != 'right'  && flag == 0) {
        dir = "left";
        flag = 1;
    }
}