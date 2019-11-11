function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
arr = [1, 2, 3, 4, 5];
console.log(contains(arr, 6));