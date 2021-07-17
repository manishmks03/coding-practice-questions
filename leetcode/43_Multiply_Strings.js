/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  let res = [];

  const mul = (num, multipler) => {
    if (num == 0 || multipler == 0) return 0;

    let res = 0,
      carry = 0;

    num.split("").map((n, i) => {
      const toMul = num[num.length - 1 - i] * multipler + carry;
      const remainder = toMul > 9 ? parseInt(toMul.toString()[1]) : toMul;
      res = (remainder + res).toString();
      carry = toMul > 9 ? parseInt(toMul.toString()[0]) : 0;
    });
    if (carry) res = carry + res;

    return res;
  };

  const add = (n1, n2) => {
    let res = 0,
      carry = 0;

    let num = n1.length >= n2.length ? n1 : n2;

    num.split("").map((n, i) => {
      const digit1 = parseInt(n1[n1.length - 1 - i]) || 0;
      const digit2 = parseInt(n2[n2.length - 1 - i]) || 0;
      const toAdd = digit1 + digit2 + carry;
      const remainder = toAdd > 9 ? parseInt(toAdd.toString()[1]) : toAdd;
      res = (remainder + res).toString();
      carry = toAdd > 9 ? parseInt(toAdd.toString()[0]) : 0;
    });
    if (carry) res = carry + res;

    return res;
  };

  const appendNZerosAtLast = (str, n) => {
    while (n > 0) {
      str = str + 0;
      n--;
    }
    return str;
  };

  for (let i = num2.length - 1; i >= 0; i--) {
    const mulResult = mul(num1, num2[i]);
    res.push(mulResult);
  }

  let ans = 0;
  res.forEach((num, index) => {
    const zeroApeenedNum = appendNZerosAtLast(num, index);
    ans = add(zeroApeenedNum, ans.toString());
  });

  return ans;
};

console.log(multiply("2", "3"));
console.log(multiply("123456789", "987654321"));
console.log(multiply("123", "456"));
console.log(multiply("123456789", "987654321"));
