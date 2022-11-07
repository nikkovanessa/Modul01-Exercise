// BizzBuzz
let num = 90

for (let i = 1; i <= num; i++)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("BizzBuzz =>", i)
    } else if (i % 3 === 0) {
        console.log("Bizz =>", i)
    } else if (i % 5 === 0) {
        console.log("Buzz =>", i)
    }

// No. 1 Multiplication table of a given integer
let numb = 9,
    totalMult = 10

for (let i = 1; i <= totalMult; i++) {
    const result = i * numb
        console.log(`${numb} x ${i} = ${result}`)
}

// No. 2 Check whether a string is palindrome or not
let string = "level"
let stringLower = string.toLowerCase()
let newString = string.length
let result = 0

for (let i = 0; i < newString / 2; i++) {
    if (string[i] !== string[newString - 1 - i]) {
    result++;
    }
}
if (result == 0){
    console.log(`${string}, it is a Palindrome`)
} else {
    console.log(`${string}, it is not a Palindrome`)
}

// No. 3 Convert centimeter to kilometer
const centiMeter = 100000
const kiloMeter = centiMeter / 1e5
    console.log(`${centiMeter} cm = ${kiloMeter} km`)

// No. 4 Format number as currency (IDR)
let numToIdr = 1000
    console.log(`Rp. ${numToIdr.toLocaleString (`id`)},00`)

// No. 5 Remove the first occurrence of a given "search string" from a string
let str = "Hello world"
    removeStr = "ell"
str = str.replace(removeStr, '')
    console.log(str)

// No. 6 Capitalize the first letter of each word in a string
const str2 = "hello world"
const arr = str2.split(" ")

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
}
const newStr2 = arr.join(" ")
    console.log(newStr2)

// No. 7 Reverse a string
let str3 = "Hello world",
    newStr3 = ""
   
for (let i = str3.length - 1 ; i >= 0 ; i--)
    newStr3 += str3 [i]

    console.log(newStr3)