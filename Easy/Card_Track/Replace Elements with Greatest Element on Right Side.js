/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.
Example 2:

Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

Constraints:

1 <= arr.length <= 104
1 <= arr[i] <= 105
*/

// Runtime: 2 ms Memory Usage: 65.2 MB

function replaceElements_1(arr) {
  if (arr.length === 0) return arr;
  if (arr.length === 1) {
    arr[0] = -1;
    return arr;
  }
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) max = arr[i];
    if (max > arr[i]) arr[i] = max;
  }
  arr[arr.length] = -1
  arr.shift()
  return arr
};

// Runtime: 1 ms Memory Usage: 65.3 MB
function replaceElements_2(arr) {
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = max;
    if (current > max) max = current;
  }
  arr[arr.length - 1] = -1;
  return arr;
};