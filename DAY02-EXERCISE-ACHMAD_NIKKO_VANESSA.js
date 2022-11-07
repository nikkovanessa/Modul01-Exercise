// No. 1 Celcius to Fahrenheit
const celsius = 28

const fahrenheit = celsius * 9 / 5 + 32
    console.log(fahrenheit)

// No. 2 Odd or Even Number
let num1 = 12
if(num1 % 2 == 0){
    console.log(num1, "is an Even Number")
}else{
    console.log(num1, "is an Odd Number")
}

// No. 3 Prime Number or not
const num2 = 17
let div = 0
  for(let i = 1; i <= num2; i++){
    if(num2 % i == 0){
      div++
    }
  }
  if(div == 2){
    console.log(num2, "is a Prime Number")
  }else{
    console.log(num2, "is not a Prime Number")
  }

// No. 4 Sum of Numbers 1 to N
const n = 5
let sum = 0
i = 1
  while(i <= n){
    sum += i; i++;
  }
  console.log(`Sum of Numbers 1 to ${n} is`, sum)

// No. 5 Factorial of Number
const num3 = 5 ;
  if(num3 < 0){
    console.log("Factorial Number is non-negative integer");
  }else{
    let fact = 1;
      for(i = 1; i <= num3; i++){
          fact *= i;
      }
    console.log(`Factorial of ${num3} is`, fact);
  }

// No. 6 Fibonacci numbers
const num4 = 5
let no1 = 0, no2 = 1, nextNo
    console.log(`The first ${num4} Fibonacci numbers:`)
  for(let i = 1; i <= num4; i++){
      console.log(no1)
  
    nextNo = no1 + no2
    no1 = no2
    no2 = nextNo
  }

// No. 5 (DAY01-EXERCISE) Difference between dates in days
var date1 = new Date("09/30/2022"),
    date2 = new Date("10/30/2022")

var timediff = date2.getTime() - date1.getTime()
var days_diff = timediff / (1000 * 60 * 60 * 24)
  console.log(`Difference days between : ${date1} and ${date2} is ${days_diff}`)
