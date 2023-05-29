var addBinary = function (a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);

  return sum.toString(2);
};

const a = '101';
const b = '1';

console.log(addBinary(a, b));
