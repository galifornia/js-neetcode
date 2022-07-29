// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function (nums, k) {
  const dict = new Map();
  nums.forEach((num) => {
    dict.set(num, dict.has(num) ? dict.get(num) + 1 : 1);
  });

  const sortedDict = new Map([...dict.entries()].sort((a, b) => b[1] - a[1]));

  let results = [];
  for (let [key, value] of sortedDict) {
    results.push(key);
    k--;
    if (k === 0) break;
  }

  return results;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
