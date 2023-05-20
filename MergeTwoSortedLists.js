// Merge Two Sorted Lists - easy
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
	if(!list2) return list2;
	else if (!list2) return list1
};

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

console.log(mergeTwoLists(list1, list2))