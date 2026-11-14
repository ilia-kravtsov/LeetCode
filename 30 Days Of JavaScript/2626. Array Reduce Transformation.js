const nums = [1,2,3,4]
const fn = function sum(accum, curr) { return accum + curr * curr; }
const init = 100

var reduce = function(nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

console.log(reduce(nums, fn, init));