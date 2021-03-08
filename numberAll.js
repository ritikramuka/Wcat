function numberAll(arr) {
    let number = 1;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = number + ". " + arr[i];
        number++;
    }
    return arr;
}
module.exports = {
    fn : numberAll,
}