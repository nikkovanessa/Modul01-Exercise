// No. 1 Triangle Pattern Numbers (01,02,...10)
function triangle (height) {
let result = ``
let num = 1
        for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
                if (num < 10) {
                        result += `0${num} `
                } else {
                        result += `${num}`
                }
                num++
        }
                result += `\n`
        }
        return result
}
console.log(triangle(4))

// No. 2 Function FizzBuzz
function fizzBuzz (n) {
let temp = []
        for (let i = 1; i < n + 1; i++) {
                if (i === 0) {
                        temp.push(i);
                } else if (i % 3 === 0 && i % 5 === 0) {
                        temp.push("FizzBuzz")
                } else if (i % 3 === 0) {
                        temp.push("Fizz")
                } else if (i % 5 === 0) {
                        temp.push("Buzz")
                } else {
                        temp.push(i)
                }
        }
        return temp
}
console.table(fizzBuzz(30))

// No. 3 Function to Calculate Body Mass Index
function bmi (weight, height) {
let resultBMI = (weight / Math.pow(height / 100, 2))
        if (resultBMI < 18.5) {
            info = "less weight"
        } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
            info = "ideal"
        } else if (resultBMI >= 25 && resultBMI <= 29.9) {
            info = "overweight"
        } else if (resultBMI >= 30 && resultBMI <= 39.9) {
            info = "very overweight"
        } else {
            info = "obesity"
        }
        return info
}
console.log(bmi(70, 170))

// No. 4 Function to Remove all Odd Numbers in Array
let numb = [1,2,3,4,5,6,7,8,9,10]
let odd = numb.length

for (let i = 0; i < odd; i++) {
  for (let j = 0; j < numb.length; j++)
    if (numb[j] % 2 === 1) {
      numb.splice(j, 1)
      break
    }
  }
console.log(numb)

// No. 5 Function to split a String & Convert it into Array
let str = "String to Array"
stringToArray = function (str) {
        return str.split(" ")
}
console.log(stringToArray(str))