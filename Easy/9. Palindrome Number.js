/*

Code
Testcase
Testcase
Test Result
9. Palindrome Number
Solved
Easy
Topics
Companies
Hint
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

function isPalindrome(x) {
  if (x < 0) return false;
  const s = x.toString();
  return s === s.split('').reverse().join('');
};

function isPalindrome_2 (x) {
  if (x < 0) return false;
  let original = x,
    reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return original === reversed;
};