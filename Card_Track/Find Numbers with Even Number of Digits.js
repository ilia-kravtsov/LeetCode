/*
Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 105
*/

// Runtime: 0 ms Memory Usage: 54.1 MB

function findNumbers_1(nums) {
  let evens = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      evens++
    }
  }
  return evens;
};

// Runtime: 1 ms Memory Usage: 54.7 MB

function findNumbers_2(nums) {
  function countDigits(num) {
    if (num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
  }

  let result = 0;

  for (let num of nums) {
    if (countDigits(num) % 2 === 0) {
      result++;
    }
  }

  return result;
};

// Runtime: 3 ms Memory Usage: 54.7 MB

function findNumbers_3(nums) {
  let amoutOfDigits = [];
  let result = 0;
  let current = 0;
  function removeRightDigit(num) {
    if (num === 0) {
      amoutOfDigits.push(current);
      current = 0;
      return 0;
    } else {
      current++;
      num = Math.floor(num / 10);
      removeRightDigit(num);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    removeRightDigit(nums[i]);
  }
  for (let i = 0; i < amoutOfDigits.length; i++) {
    if (amoutOfDigits[i] % 2 === 0) {
      result++;
    }
  }
  return result;
};

// Runtime: 5 ms Memory Usage: 54.2 MB

function findNumbers_4(nums) {
  function countDigits(num) {
    if (num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
  }

  let result = 0;

  for (let num of nums) {
    if (countDigits(num) % 2 === 0) {
      result++;
    }
  }

  return result;
};