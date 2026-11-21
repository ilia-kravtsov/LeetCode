var once = function(fn) {
    let count = 0;
    return function(...args){
        if (!count) {
            count++;
            return fn(...args);
        }

        return undefined;
    }
};

let fn = (a,b,c) => (a * b * c);
const onceFn = once(fn);

console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined, fn was not called
console.log(onceFn(4, 6, 8)); // undefined, fn was not called