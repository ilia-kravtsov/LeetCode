/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
   Hide Hint #1  
You need to think about two things as far as any window is concerned. One is the starting point for the window. How do you detect that a new window of 1s has started? The next part is detecting the ending point for this window. How do you detect the ending point for an existing window? If you figure these two things out, you will be able to detect the windows of consecutive ones. All that remains afterward is to find the longest such window and return the size.
*/

// Runtime: 2 ms Memory Usage: 60.4 MB
function findMaxConsecutiveOnes_1(nums) {
  let ones = 0;
  let arrayOfMaximumValues = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) ones++;
    if (nums[i] === 0 || (i === nums.length - 1 && nums[i] === 1)) {
      if (ones > 0) {
        arrayOfMaximumValues.push(ones);
      }
      ones = 0;
    }
  }
  return arrayOfMaximumValues.length > 0 ? Math.max(...arrayOfMaximumValues) : 0;
};

// Runtime: 0 ms Memory Usage: 60.5 MB

function findMaxConsecutiveOnes_2(nums) {
  let ones = 0;
  let maxOnes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      ones++;
      if (ones > maxOnes) maxOnes = ones;
    } else {
      ones = 0;
    }
  }
  return maxOnes;
}