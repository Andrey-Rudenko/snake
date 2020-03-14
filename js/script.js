
//Спавн переменных 
record = localStorage.getItem('recordKey');
let dir = "right";
let snakeMassive = [];
let frame = 0;
let stop = false;
let flag = 0;
let score = 0;
let b = new blocks;
let timeX = 9;
fedyaX = 250;
flagAlert = 0;
//проверяем на спавн внутри змейки
check(snakeMassive,b);
//keycode
document.addEventListener("keydown", direction);    
//координаты первой змейки
snakeInd(snakeMassive);
