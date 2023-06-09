// Two Sum - easy
// Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так, чтобы они составляли в сумме target 
// Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// for (let index = 0; index < array.length; index++) {
// 	const element = array[index];
// }


// Скорость алгоритма  O(n2)
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j]
			}
		}
	}
};

// Скорость алгоритма O(n)
var twoSum = function(nums, target) {
	let map = new Map();
  
	for (let i = 0; i < nums.length; i ++) {
	  const diff = target - nums[i];
	  
	  if (map.has(diff)) {
		return [i, map.get(diff)]
	  }
  
	  map.set(nums[i], i)
	}
  };

console.log(twoSum([3,2,3], 6))