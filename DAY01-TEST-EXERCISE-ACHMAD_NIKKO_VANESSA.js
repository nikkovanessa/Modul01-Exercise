const {
    areaRectangle, 
    perimeterRectangle,
    circumferences,
    areaCircle,
    thirdAngle,
    countDays,
    daysDiff
} = require('./DAY01-EXERCISE-ACHMAD_NIKKO_VANESSA');

test('Test Area of Rectangle function', () => {
    expect(areaRectangle(10, 5)).toBe(50);
})

test('Test Perimeter of Rectangle function', () => {
    expect(perimeterRectangle(10, 5)).toBe(30);
})

test('Test circumferences function', () => {
    expect(circumferences(7)).toBe(21.991148575128552);
})

test('Test Area of Circle function', () => {
    expect(areaCircle(7)).toBe(153.93804002589985);
})

test('Test Third Angle function', () => {
    expect(thirdAngle(30, 90)).toBe(60);
})

test('Test Days Diff function', () => {
    expect(daysDiff(new Date("10/30/2022"), new Date("9/30/2022"))).toBe(30);
})


test('Test Counting Year, Month, Days function', () => {
    expect(countDays(400)).toBe('1 year, 1 month, 5 days');
})






