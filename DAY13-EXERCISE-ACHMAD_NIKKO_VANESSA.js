// 1. Weekend Check

let weekendCheck = (date) => {
    if (new Date(date).getDay() == 6 || new Date(date).getDay() == 0) {
        return "It's Weekend";
    } else {
        return "Isn't Weekend";
    }
}

console.log(weekendCheck("2022-11-27"));

// 2. Find GCD (FPB)

let findGCD = (num1, num2) => {
    while (num1 != num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }
    return num1;
}

console.log(findGCD(12, 18));

// 3. Find LCM (KPK)

let findLCM = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let result = max;

    do {
        result += max;
    } while (result % min !== 0);
        return result;
}

console.log(findLCM(5, 6));

// 4. Find Highest Common Character of String

let commonChar = (str) => {
    let strToObj = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (strToObj[char]) {
            strToObj[char]++;
        } else {
            strToObj[char] = 1;
        }
    }

    for (let char in strToObj) {
        if (strToObj[char] > max) {
            max = strToObj[char];
            maxChar = char;
        }
    }
    return `${maxChar} : ${max}`;
}

console.log(commonChar("hellloo"));

// 5. Sort the String

// With Sort Function
let sort = (str) => {
    let arrayWords = str.split("").sort().join("");
    return arrayWords;
}

console.log(sort("alphabet"));

// Without Sort Function
let sort2 = (str) => {
    let arrayWords = str.split("");
    let temp = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (arrayWords[j] > arrayWords[i]) {
                temp = arrayWords[i];
                arrayWords[i] = arrayWords[j];
                arrayWords[j] = temp;
            }
        }
    }
    return arrayWords.join("");
}

console.log(sort2("alphabet"));

// 6. Get Minimum Dates

let minDate = (date) => {
    let min = new Date(Math.min(...date));
    return min;
}

let dates = [
    new Date("2022-11-28"),
    new Date("2022-11-23"),
    new Date("2022-11-25")
]

let result = minDate(dates);
console.log(result);

// 7. Sum Arrays

let sumArr = (arr) => {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result += arr[i][j];
        }
    }
    return result; 
}

let arr = [
    [1, 2, 3],
    [2, 1, 3],
    [3, 2, 1]
]

console.log(sumArr(arr));

// 8. Common Prefix String

let commonPrefix = (str1, str2) => {
    let result = "";

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == str2[i]) {
            result += str2[i];
        }
    }
    return result;
}

let arrPrefix = (arr, cbfn) => {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result = cbfn(arr[0], arr[i]);
    }
    return result;
}

let string = ["geeksforgeeks", "geeks", "geek", "geeker"];
console.log(arrPrefix(string, commonPrefix));

// 9. Array Filter Index

let arrFilter = (arr) => {
    let result = [];
  
    for (let i = 0; i < arr.length / 2; i++) {
      result.push(arr[i]);
    }
  
    return result;
  };
  
  let array = ["Car", "Bike", "Truck", "Bus", "Train", "Plane", "Motorcycle"];

  console.log(arrFilter(array));

// 10. Days in Month

let daysInMonth = (month, year) => {
    let days = new Date(year, month, 0).getDate();
    return `Month = ${month}, Year = ${year} => ${days} days`;
}
  
console.log(daysInMonth(11, 2022));

// 11. Days Passed from Last New Year

let daysPassed = (date) => {
    let current = new Date(date.getTime());
    let newYear = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((current - newYear + 1) / (1000 * 60 * 60 * 24));
}

console.log(daysPassed(new Date("2022-11-25")));

// 12. Calculate Age

let calculateAge = (birth) => {
    let diff = Date.now() - birth.getTime();
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}

console.log(calculateAge(new Date("1995-07-24")));