let blockUp = document.getElementById('up');
blockUp.onclick = function(){
    if (dir != 'down') {
        dir = "up"
    }
}
let blockDown = document.getElementById('down');
blockDown.onclick = function(){
    if (dir != 'up') {
        dir = "down"
    }
}
let blockRight = document.getElementById('right');
blockRight.onclick = function(){
    if (dir != 'left') {
        dir = "right"
    }
}
let blockLeft = document.getElementById('left');
blockLeft.onclick = function(){
    if (dir != 'right') {
        dir = "left"
    }
}