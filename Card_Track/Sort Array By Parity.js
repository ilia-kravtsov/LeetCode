/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 500
*/

// Runtime: 0 ms Memory Usage: 57.8 MB

var sortArrayByParity_1 = function (nums) {
  let writePointer = 0;
  let odds = [];
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] % 2 === 0) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    } else if (nums[readPointer] % 2 !== 0) {
      odds.push(nums[readPointer]);
    }
  }
  nums.length = writePointer;
  return nums.concat(odds);
};

// Runtime: 6 ms Memory Usage: 57.7 MB
var sortArrayByParity_2 = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 > nums[right] % 2) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    if (nums[left] % 2 === 0) left++;
    if (nums[right] % 2 === 1) right--;
  }
  return nums;
};