/*
383. Ransom Note
Solved
Easy
Topics
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

function canConstruct (ransomNote, magazine) {
  const lettersCount = {};

  for (let letter of magazine) {
    lettersCount[letter] = (lettersCount[letter] || 0) + 1;
  }
  
  for (let letter of ransomNote) {
    if (!lettersCount[letter]) return false;
    lettersCount[letter]--;
  }

  return true;
};

function canConstruct_2 (ransomNote, magazine) {
  let lettersCount = {};

  for (let i = 0; i < magazine.length; i++) {
    lettersCount[magazine[i]] = (lettersCount[magazine[i]] || 0) + 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!lettersCount[ransomNote[i]]) return false;
    lettersCount[ransomNote[i]]--;
  }

  return true
};