// 1480. Running Sum of 1d Array

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

// my solution to this task is given above

var runningSum = function(nums) {
    let result = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        result.push(element + sum)
        sum += element
    }
    return result
};

// or 

var runningSum = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    result[0] = nums[0];
    for (let i = 1; i < n; i++) {
      result[i] = result[i - 1] + nums[i];
    }
    return result;
  };

// or 

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] = nums[i - 1] + nums[i];
    }
    return nums
};