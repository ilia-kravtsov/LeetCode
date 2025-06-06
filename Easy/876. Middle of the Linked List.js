/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

function middleNode(head) {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  let mid = Math.floor(count / 2);
  current = head;
  for (let i = 0; i < mid; i++) {
    current = current.next;
  }

  return current;
};