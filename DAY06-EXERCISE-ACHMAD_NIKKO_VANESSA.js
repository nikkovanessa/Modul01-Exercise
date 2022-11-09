// // No. 1
class Student {
    constructor (name, email, age, score) {
        this.name = name
        this.email = email
        this.age = age
        this.score = score
    }
}
let studentDbs = [
    new Student ("John", "john@mail.com", "07/24/1995", 69),
    new Student ("Misc", "misc@mail.com", "11/05/1997", 80),
    new Student ("Randy", "randy@mail.com", "09/09/1994", 70),
    new Student ("Max", "max@mail,com", "04/01/1993", 59),
]
function count (data) {
    let year = new Date().getYear(),
        highest = 0,
        lowest = 0,
        average = 0,
        score = {},
        age = {},
        result = {}
        for (let i = 0; i < data.length; i++) {
            let studentAge = year - new Date(data[i].age).getYear()
            data[i].age = studentAge
            if (i === 0) {
                highest = data[i]
                lowest = data[i]
            } else if (data[i].age > highest.age) {
                highest = data[i]
            } else if (data[i].age < lowest.age) {
                lowest = data[i]
            }
            average += data[i].age
        }
        age = {
            highest : highest,
            lowest : lowest,
            average : average / data.length
        }
        average = 0
        for (let i = 0; i < data.length; i++) {
            if (i === 0) {
                highest = data[i]
                lowest = data[i]
            } else if (data[i].score > highest.score) {
                highest = data[i]
            } else if (data[i].score < lowest.score) {
                lowest = data[i]
            }
            average += data[i].score
        }
        score = {
            highest: highest,
            lowest: lowest,
            average: average / data.length
        }
        result = {
            score: score,
            age: age
        }
        return result
}
console.log(count(studentDbs));

// No. 2
// class Product {
//     constructor (name, price) {
//         this.name = name
//         this.price = price
//     }
// }

// class Transaction {
//     total = 0
//     allProducts = []
//     addCart(product, qty) {
//         this.allProducts.push(product)
//         for (let i in this.allProducts) {
//             if (this.allProducts[i].qty === undefined) {
//                 this.allProducts[i].qty = qty
//             }
//         }
//     }