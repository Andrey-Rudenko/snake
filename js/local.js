record = localStorage.getItem('recordKey');
console.log(record);
if (record == null) {
    record = 0;
}