// Для заданного целочисленного массива nums возвращайте значение, 
// true если какое-либо значение встречается в массиве не менее двух раз false ,
//  и возвращайте значение , если все элементы различны.
 
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

var containsDuplicate = function(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (map.get(nums[i]) !== undefined) {
        return true;
      }

      map.set(nums[i], i)
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))



var containsDuplicate = function(nums) {
  const notSimilar = new Set(nums);
  return notSimilar.size === nums.length;
};

console.log(containsDuplicate([1,2,3,4]))
