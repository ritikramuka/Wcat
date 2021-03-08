function numberNonEmpty(arr) {
    let number = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '' && arr[i] != '\r') {
            arr[i] = number + ". " + arr[i];
            number++;
        }
    }
    return arr;
}
module.exports = {
    fn: numberNonEmpty,
};