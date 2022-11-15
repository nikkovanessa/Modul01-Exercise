// No. 1 check two objects are equal
let fruit1 = {
  name : "Orange",
  etc : {
    color : "Orange",
    vitamin : "C"
  }
}
let fruit2 = {
  name : "Apple",
  etc : {
    color : "Red",
    vitamin : "C"
  }
}
let fruit3 = {
  name : "Grape",
  etc : {
    color : "Purple",
    vitamin : "A"
  }
}

let equal = (obj1, obj2) => {
  return obj1.etc.vitamin === obj2.etc.vitamin;
}

console.log(equal(fruit1, fruit2)); // same vitamin
console.log(equal(fruit1, fruit3)); // different vitamin

// No. 2 intersection of two objects
let object1 = {
  a : 1,
  b : 2,
  c : 3
}
let object2 = {
  a : 1,
  c : 3
}

let intersection = (obj1, obj2) => {
  let result = {}
    for (let key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    }
    return result;
}
console.log(intersection(object1, object2));

// No. 3 merge 2 array and remove duplicate data
let arr1 = [
  {nama : 'Student 1', email : 'student1@mail.com'},
  {nama : 'Student 2', email : 'student2@mail.com'}
]
let arr2 = [
  {nama : 'Student 1', email : 'student1@mail.com'},
  {nama : 'Student 3', email : 'student3@mail.com'}
]

let mergeArr = (arr1, arr2) => {
  let newArr = new Set(arr1.map((i) => i.nama))
  let merge = [...arr1, ...arr2.filter((i) => !newArr.has(i.nama))]
  return merge;
}

console.log(mergeArr(arr1, arr2));

// No. 4 switch all value into property & property into value
let student = {
  name : 'David',
  age : 20
}

let swap = (student) => {
  let keyStudent = Object.keys(student)
  let propStudent = Object.values(student)

  let result = {}

  propStudent.forEach((element, index) => {
  result[element] = keyStudent[index]
  })
  return result;
}

console.log(swap(student));

// No. 5 factorial number using recursion
let factorial = (x) => {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
let result = factorial(5);
console.log(result);