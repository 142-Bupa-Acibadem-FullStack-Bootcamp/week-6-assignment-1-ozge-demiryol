/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

let nums = [2, 7, 11, 15];
let target = 9;
const sum = (nums, target) => {
  let n = nums.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }

  return result;
};

console.log(sum(nums, target)); //output: [0,1]
