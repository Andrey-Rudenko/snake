//Кнопка вверх
let blockUp = document.getElementById('up');
blockUp.onclick = function(){
    if (dir != 'down') {
        dir = "up";
    }
}
//Кнопка вниз
let blockDown = document.getElementById('down');
blockDown.onclick = function(){
    if (dir != 'up') {
        dir = "down";
    }
}
//Кнопка вправо
let blockRight = document.getElementById('right');
blockRight.onclick = function(){
    if (dir != 'left') {
        dir = "right";
    }
}
//Кнопка влево 
let blockLeft = document.getElementById('left');
blockLeft.onclick = function(){
    if (dir != 'right') {
        dir = "left";
    }
}