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
class Product {
    constructor(name, price, qty) {
      this.name = name
      this.price = price
      this.qty = qty
    }
  }
  
  class Transaction {
    total = 0
    boughtProduct = []
  
    cartList (productList) {
      this.boughtProduct.push(productList);
    }
  
    cartView () {
      let myCart = `MY CART\n\n`;
      for (let i = 0; i < this.boughtProduct.length; i++) {
        myCart += `Product: ${this.boughtProduct[i].name}\nQuantity: ${this.boughtProduct[i].qty}\nPrice / qty: ${this.boughtProduct[i].price}\n`
        myCart += `\n`
      }
      console.log(myCart);
    }
  
    checkout () {
      let myCheckout = `CHECK OUT\n\nTotal transaction:\n`
      for (let i = 0; i < this.boughtProduct.length; i++) {
        myCheckout += `${this.boughtProduct[i].name}: ${
        this.boughtProduct[i].qty * this.boughtProduct[i].price
        }\n`
        this.total += this.boughtProduct[i].qty * this.boughtProduct[i].price;
      }
      myCheckout += `Total Price: ${this.total}\n\n`;
  
      console.log(myCheckout);
    }
  
    payment(money) {
      let pay = `PAYMENT\n\n`
      if (money > this.total) {
        pay += `Transaction Succesful\nTotal Price: ${
          this.total
        }\nMoney: ${money}\nChange: ${money - this.total}`;
      } else if (money < this.total) {
        pay += `Transaction Canceled\nTotal Price: ${this.total}\nMoney: ${money}\nMoney is not enough`
      } else {
        pay += `Transaction Succesful\nTotal Price: ${this.total}\nMoney: ${money}`
      }
      console.log(pay);
    }
  }
  
  // Product List
  const products = [
    new Product("Jacket", 100000, 5),
    new Product("Hoodie", 150000, 7),
    new Product("Sweater", 120000, 8),
  ]
  
  let transaction = new Transaction();
  
  // Input Product
  transaction.cartList(products[0]);
  transaction.cartList(products[1]);
  transaction.cartList(products[2]);
  
  // Show Cart List
  transaction.cartView();
  
  // Show Total Transaction
  transaction.checkout();
  
  // Input money
  transaction.payment(3000000);