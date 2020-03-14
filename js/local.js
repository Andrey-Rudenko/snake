//Запоминание рекорда 
record = localStorage.getItem('recordKey');
if (record == null) {
    record = 0;
    localStorage.setItem('recordKey', 0);
}