// No. 1 Area of Rectangle
let areaRectangle = (length, breadth) => {
    return length * breadth;
}

// No. 2 Perimeter of Rectangle
let perimeterRectangle = (length, breadth) => {
    return 2 * (length + breadth);
}

// No. 3 Circumferences or Perimeter of Circle & Area of Circle
// a. Circumferences
let circumferences = (r) => {
    return Math.PI * r;
}

// b. Area of Circle
let areaCircle = (r) => {
    return Math.PI * Math.pow(r, 2);
}

// No. 4 Find the Third Angle of Triangle
let thirdAngle = (firstAngle, secondAngle) => {
    return thirdAngle = 180 - firstAngle - secondAngle;
}

// No. 5 Different of Two Dates
let daysDiff = (date1, date2) => {
    let timediff = date1 - date2;
    let result = Math.ceil(timediff / (1000 * 60 * 60 * 24))
    return result;
}

// No. 6 Counting year, month, days
let countDays = (totalDays) => {
    let year = Math.floor(totalDays / 365)
    let daysLeft = totalDays % 365
    let month = Math.floor(daysLeft / 30)
    let days = daysLeft % 30
    return `${year} year, ${month} month, ${days} days`
}

module.exports = {
    areaRectangle, 
    perimeterRectangle,
    circumferences,
    areaCircle,
    thirdAngle,
    daysDiff,
    countDays
}