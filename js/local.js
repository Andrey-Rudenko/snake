//Запоминание рекорда 
record = localStorage.getItem('recordKey');
if (record == null) {
    names = 'SnakeTheGame';
}