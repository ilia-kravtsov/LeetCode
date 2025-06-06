/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
Hide Hint #1  
It's very easy to keep track of a monotonically increasing or decreasing ordering of elements. You just need to be able to determine the start of the valley in the mountain and from that point onwards, it should be a valley i.e. no mini-hills after that. Use this information in regards to the values in the array and you will be able to come up with a straightforward solution.
*/

// Runtime: 35 ms Memory Usage: 59 MB
function validMountainArray_1(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let peaked = false;

  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) return false; 

    if (!peaked) {
      if (arr[i] < arr[i - 1]) {
        if (i === 1) return false; 
        peaked = true;
      }
    } else {
      if (arr[i] >= arr[i - 1]) return false; 
    }
  }

  return peaked; 
};

// Runtime: 45 ms Memory Usage: 58.2 MB
function validMountainArray_2(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let i = 0;

  for (; i + 1 < n && arr[i] < arr[i + 1]; i++);

  if (i === 0 || i === n - 1) return false;

  for (; i + 1 < n && arr[i] > arr[i + 1]; i++);

  return i === n - 1;
};