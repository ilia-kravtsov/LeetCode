function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        const stringArgs = JSON.stringify(args)
        if (cache.has(stringArgs)) {
            return cache.get(stringArgs);
        } else {
            const result = fn(...args)
            cache.set(stringArgs, result)
            return result
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1

console.log(memoizedFn(2, 2)) // 4
console.log(memoizedFn(2, 2)) // 4
console.log(memoizedFn(1, 2)) // 3


const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
console.log(memoFactorial(2)); // 2
console.log(memoFactorial(3)); // 6
console.log(memoFactorial(2)); // 2
console.log(memoFactorial(3)); // 6
console.log(memoFactorial(2)); // 2

