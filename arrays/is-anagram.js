var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const dict = new Map();
  for (let i = 0; i < s.length; i++) {
    const sValue = dict.has(s.charAt(i)) ? dict.get(s.charAt(i)) + 1 : 1;
    dict.set(s.charAt(i), sValue);

    const tValue = dict.has(t.charAt(i)) ? dict.get(t.charAt(i)) - 1 : -1;
    dict.set(t.charAt(i), tValue);

    if (dict.get(t.charAt(i)) === 0) dict.delete(t.charAt(i));
    if (dict.get(s.charAt(i)) === 0) dict.delete(s.charAt(i));
  }

  return dict.size === 0;
};

console.log(isAnagram('rat', 'car'));
console.log(isAnagram('rca', 'car'));
