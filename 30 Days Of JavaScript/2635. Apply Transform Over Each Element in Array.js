// The code below was created by NI - Natural Intelligence
const arr = [1,2,3];

const fn = function plusI(n, i) { return n + i; }

var map = function(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }

    return arr;
};

console.log(map(arr, fn))