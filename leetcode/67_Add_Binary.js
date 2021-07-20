/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 1 - 1 => 10
// 1 - 0 => 1
// 0 - 1 => 1
// 0 - 0 => 0

const binaryAddition = (digit1, digit2) => {
  let sum = 0;
  if (digit1 == 0 && digit2 == 0) sum = 0;
  else if (digit1 == 1 && digit2 == 1) sum = 10;
  else if (digit1 == 0 && digit2 == 1) sum = 1;
  else if (digit1 == 1 && digit2 == 0) sum = 1;
  return sum;
};

const add = (n1, n2) => {
  let res = 0,
    carry = null;

  let num = n1.length >= n2.length ? n1 : n2;

  console.log("num---- ", { num, n1, n2 });

  num.split("").map((n, i) => {
    const digit1 = parseInt(n1[n1.length - 1 - i]) || 0;
    const digit2 = parseInt(n2[n2.length - 1 - i]) || 0;
    let sum = binaryAddition(digit1, digit2);

    const toAdd = binaryAddition(sum, carry);
    const remainder = toAdd == 10 ? 0 : toAdd;
    res = (remainder + res).toString();
    carry = toAdd == 10 ? 1 : null;
    console.log("Sum:", {
      i,
      sum,
      carry,
      toAdd,
      res
    });
  });
  //   if (carry) res = carry.concat(res);
  binaryAddition(carry + res);

  return res;
};

var addBinary = function (a, b) {
  return add(a, b);
};

// console.log(addBinary("11", "1"));
console.log(addBinary("11", "1"));
