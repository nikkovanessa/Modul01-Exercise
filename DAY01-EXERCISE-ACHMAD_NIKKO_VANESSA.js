// No. 1
let length = 3 , breadth = 4 
let areaRectangle = length * breadth
    console.log(`No. 1
    Length : ${length} Breadth : ${breadth}, Area of Rectangle : ${areaRectangle}`)
// No. 2
let perimeter = 2 * (length + breadth)
    console.log(`No. 2
    Length : ${length}, Breadth : ${breadth}, Perimeter of Rectangle : ${perimeter}`)

// No. 3
let r = 5
let diameter = 2 * r
let circumferences = Math.PI * diameter
let areaCircle = Math.PI * Math.pow(r, 2)
    console.log(`No. 3
    r : ${r}, Diameter : ${diameter}, Circumferences : ${circumferences}, Area of Circle : ${areaCircle}`)

// No. 4
let angleA = 90
let angleB = 30
let angleC = 180 - (angleA + angleB)
    console.log(`No. 4
    Angle A : ${angleA}, Angle B : ${angleB} then, Angle C : ${angleC}`)

// No. 5 (Skip)

// No. 6
var total = 400

var year = Math.floor(total / 365)
var left = total % 365

var month = Math.floor(left / 30)
var days = left % 30

var result = `No. 6
    ${year} year, ${month} month, ${days} days`
    console.log(result)