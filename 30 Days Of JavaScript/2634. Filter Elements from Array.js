const arr = [0,10,20,30];
const fn = function greaterThan10(n) { return n > 10; }

const arr_2 = [1,2,3];
const fn_2 = function firstIndex(n, i) { return i === 0; }

const arr_3 = [-2,-1,0,1,2];
const fn_3 = function plusOne(n) { return n + 1 };

var filter = function(arr, fn) {
    const result = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result[j] = arr[i];
            j++;
        }
    }

    return result;
};

console.log(filter(arr, fn));
console.log(filter(arr_2, fn_2));
console.log(filter(arr_3, fn_3));