/*
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 9
*/

// Runtime: 4 ms Memory Usage: 57.2 MB

function duplicateZeros_1(arr) {
  let zeros = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeros++;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i + zeros < n) {
      arr[i + zeros] = arr[i];
    }

    if (arr[i] === 0) {
      zeros--;
      if (i + zeros < n) {
        arr[i + zeros] = 0;
      }
    }
  }
}

// Runtime: 2 ms Memory Usage: 57.9 MB

function duplicateZeros_2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) result.push(0);
    result.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
}
