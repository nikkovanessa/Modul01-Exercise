/// 1 ///

    // TITLE : Function to Detect Odd or Even Number

    // INPUT :
    // 1. Create function to detect numbers
    let detect = (num) => {

        // PROSES :
            // 1. Use if statement to detect number
            if (num % 2 == 1) {
                // a. if yes return even
                return "Odd";
            }
                // b. else return odd
            else {
                return "Even";
            }    
        }     
        // OUTPUT :
            // Result with NUMBER data type
            console.log(detect(10));

/// 2 ///

    // TITLE : Function to Reverse String

    // INPUT :
    // 1. Create function reverse to execute str with STRING data type
    let reverse = (str) => {

        // PROSES :
            // 1. Create newStr to execute STRING input
            let newStr = "";
            // 2. Use for looping statement to reverse
            for (let i = str.length - 1 ; i >= 0 ; i--) {
            // 3. Join reverse STRING input to reversed STRING
            newStr += str [i];
            }
            // 4. Return reversed STRING
            return newStr;
        }
        // OUTPUT :
            // Result with STRING data type
            console.log(reverse("dan terjadi lagi"));


// 1. Duplicate Map //
let duplicateMap = (arr, cbfn) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let result = cbfn(arr[i], i);
        temp.push(result);
    }
    return temp;
}

let combine = (arr, i) => {
    return `${i + 1}. ${arr}`;
}

let resultMap = duplicateMap(["Orange", "Apple", "Grape", "Mango"], combine);
console.log(resultMap);


// // 2. Duplicate Filter //
let duplicateFilter = (arr, cbfn) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let result = cbfn(arr[i], i);
        if (result == true) {
            temp.push(arr[i]);
        } 
    }
    return temp;
}

let filtered = (arr) => {
    return arr.length == 5;
}

let resultFilter = duplicateFilter(["Orange", "Apple", "Grape", "Mango", "Kiwi"], filtered);
console.log(resultFilter);

// 3. Duplicate Find Index Of //
let duplicateFindIndexOf = (arr, cbfn) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i];
        if (cbfn(arr[i])) {
            temp = result;
        }
    }
    return temp;
}

let findIndex = (arr) => {
    return arr == "Mango";
}

let resultFindIndex = duplicateFindIndexOf(["Orange", "Apple", "Grape", "Mango", "Kiwi"], findIndex);
console.log(resultFindIndex);