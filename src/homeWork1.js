export function printSumMult(a, b) {
  const sum = a+b;
  const mult = a*b;
  
  console.log(`Sum = ${sum}, Mult = ${mult}`);
};

export function length(text1, text2) {
  const sum = text1.length + text2.length;

  console.log(`SumLength = ${sum}`);
};

export function sumOfThreeDigitNum() {
  const num = prompt('Enter three-digit number');
  const sum = +num.charAt(0) + +num.charAt(1) + +num.charAt(2);

  console.log(`${sum}`);
};



