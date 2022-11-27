// No. 1 Convert Excel sheet column title to its corresponding column number.
let titleToNumber = (sheet) => {
    let result = 0;
    for (let i = 0; i < sheet.length; i++) {
        result *= 26;
        result += sheet[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}

// console.log(titleToNumber("CF"));

// No. 2 Filter only show once at Array
let filterShowOnce = (arr) => {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) { // index pertama - index terakhir
        unique.push(arr[i]);
        }
    }
    return unique;
}

// console.log(filterShowOnce([4, 1, 6, 2, 2, 5]));

// No. 3 Anagram 2 Words
let anagram = (s, t) => {
    if(s.length !== t.length){
        return false;
    }
    let str1 = s.toLowerCase('').split('').sort().join('');
    let str2 = t.toLowerCase('').split('').sort().join('');
    if(str1 === str2) {
        return true;
    } else { 
        return false;
    }
}

// console.log(anagram("rat", "car"));

// No. 4 Staircase Step
let staircase = (n) => {
    let result = [1, 1]; // Set array yg sesuai dengan 2 angka pertama dalam Fibonacci
    if (n > 1) { // karena soalnya dimulai dari cara 1 jadi n harus lebih dari 1
        for(let i = 2; i <= n ; i++) {
        result[i] = result[i - 1] + result[i - 2]; // Fibonacci sequence
        // ketika i = 2, maka result[2] = result[2 - 1] + result [2 - 2]
        //               =>   result[2] = result[1] + result[0]
        //               =>   result = [1, 1, 2]

        // ketika i = 3, maka result[3] = result[3 - 1] + result [3 - 2]
        //               =>   result[3] = result[2] + result[1]
        //               =>   result = [1, 1, 2, 3]

        // dan seterusnya sampai i = n
        }
    }
    return result.pop(); // gunakan .pop untuk menghapus array terakhir pada array
                         // contoh [1, 1, 2] pada result[3]
}

console.log(staircase(8));