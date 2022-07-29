// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  let result = new Array(nums.length);

  let acc = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = acc;
    acc *= nums[i];
  }

  acc = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= acc;
    acc *= nums[j];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
