// No. 1 
// with sort
function getResult(arr) {
    let result = []
    let lowest = `Lowest : ${arr.sort((a, b) => a - b)[0]}`
        result.push(lowest)
    let highest = `Highest : ${arr.sort((a, b) => b - a)[0]}`
        result.push(highest)
    let average = 0
        for (i = 0; i < arr.length; i++) {
            average += arr[i]
        }
            average = `Average : ${average / arr.length}`
                result.push(average)
    return result
  }

console.log(getResult([6, 9, 12]))

// without sort 
function getResult2(arr) {
    let result = []
    let lowestNumber = arr[0]
    let highestNumber = arr[0]
    let average = 0
        for (i = 1; i < arr.length; i++) {
            if (arr[i] < lowestNumber) {
            lowestNumber = arr[i]
            }
        }
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > highestNumber) {
            highestNumber = arr[i]
            }
        }
        for (i = 0; i < arr.length; i++) {
        average += arr[i]
        }

    lowestNumber = `Lowest : ${lowestNumber}`
    highestNumber = `Highest : ${highestNumber}`
    average = `Average : ${average / arr.length}`
    result.push(lowestNumber)
    result.push(highestNumber)
    result.push(average)
    return result
  }

console.log(getResult2([6, 9, 12]))

// No. 2
function concateString(stringarr) {
    let result = ""
        for (i = 0; i < stringarr.length - 1; i++) {
            result += stringarr[i] + ", "
        }

    result += "and " + stringarr[stringarr.length - 1]
    return result
}

console.log(concateString(["Laptop", "PC", "Tablet", "Handphone"]))

// No. 3
let str = "Hello Worlds"
stringToArray = function (str) {
        return str.split("l")
}

console.log(stringToArray(str))

// No. 4 
function sumArrays(arr1, arr2) {
    let result = []
    let shorterArr = arr1.length < arr2.length ? arr1.length : arr2.length
        for (i = 0; i < shorterArr; i++) {
            result.push(arr1[i] + arr2[i])
        }
            if (arr1.length > arr2.length) {
                for (i = shorterArr; i < arr1.length; i++) {
                    result.push(arr1[i])
                    }
            } else if (arr2.length > arr1.length) {
                for (i = shorterArr; i < arr2.length; i++) {
                    result.push(arr2[i])
                    }
            }       
        return result
}

console.log(sumArrays([3, 2, 1], [1, 2, 3, 5, 7]))

// No. 5
function addElement(arr, element) {
    if (!arr.includes(element)) {
        arr.push(element)
    }
    return arr;
}

console.log(addElement(["Hello"], "Hello"))

// remove odd
function removeOdd(arr) {
    let newArr = []
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                    if (newArr.includes(arr[i])) {
                    continue
                    }
                newArr.push(arr[i])
            }
        }
            return newArr
}
  
console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))