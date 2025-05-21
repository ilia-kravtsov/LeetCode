/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

function containsDuplicate_1(nums) {
  let store = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!store.has(nums[i])) {
      store.add(nums[i]);
    } else {
      return true;
    }
  }

  return false;
};

function containsDuplicate_2(nums) {
  let store = new Object()
  
  for (let i = 0; i < nums.length; i++) {
    if (!store.hasOwnProperty(nums[i])) {
      store[nums[i]] = 0
    } else {
      return true;
    }
  }

  return false;
};

function containsDuplicate_3(nums) {
  let sorted = nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
};