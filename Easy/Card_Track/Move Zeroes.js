/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

Follow up: Could you minimize the total number of operations done?
*/

// Runtime: 0 ms Memory Usage: 58.4 MB
function moveZeroes_1(nums) {
  let noneZeroPointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[noneZeroPointer] = nums[readPointer];
      noneZeroPointer++;
    } 
  }
  nums.fill(0, noneZeroPointer);
};

// Runtime: 0 ms Memory Usage: 59.9 MB
function moveZeroes_2(nums) {
  let noneZeroPointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[noneZeroPointer] = nums[readPointer];
      noneZeroPointer++;
    }
  }

  for (let i = noneZeroPointer; i < nums.length; i++) nums[i] = 0;
}
// Runtime: 2 ms Memory Usage: 58.6 MB
function moveZeroes_3(nums) {
  let noneZeroPointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      nums[noneZeroPointer] = nums[readPointer];
      if (readPointer > noneZeroPointer) {
        nums[readPointer] = 0;
      }
      noneZeroPointer++;
    }
  }
}