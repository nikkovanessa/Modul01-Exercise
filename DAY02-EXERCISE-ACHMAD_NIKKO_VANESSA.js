// No. 1 Celcius to Fahrenheit
let convert = (celsius) => {
  return celsius * 9 / 5 + 32;
}

// No. 2 Odd or Even Number
let oddEven = (num) => {
  if (num % 2 == 0){
    return 'Even';
  } else {
    return 'Odd';
  }
}

// No. 3 Prime Number or not
let prime = (num) => {
  if (num === 1) {
    return false;
  } else if(num === 2) {
    return true;
  } else {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return 'Not Prime';
      }
    }
    return 'Prime';  
  }
}

// No. 4 Sum of Numbers 1 to N
let sum = (num) => {
  let i = 1;
  let result = 0;
  while (i <= num) {
    result += i; i++;
  }
  return result;
}

// No. 5 Factorial of Number
let factorial = (num) => {
    let result = 1;
      for(i = 1; i <= num; i++){
          result *= i;
      }
    return result;
}

// No. 6 Fibonacci numbers
let fibonacci = (num) => {
  if (num <= 1) {
  return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = {
  convert, 
  oddEven,
  prime,
  sum,
  factorial,
  fibonacci
}
