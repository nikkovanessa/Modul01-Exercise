const {
    getResult,
    getResult2,
    concateString,
    stringToArray,
    sumArrays,
    addElement,
    removeOdd
} = require('./DAY05-EXERCISE-ACHMAD_NIKKO_VANESSA');

test('Test Lowest, Highest, and Average function with sort', () => {
    expect(getResult([6, 9, 12]))
    .toEqual(['Lowest : 6', 'Highest : 12', 'Average : 9']);
})

test('Test Lowest, Highest, and Average function without sort', () => {
    expect(getResult2([3, 5, 7]))
    .toEqual(['Lowest : 3', 'Highest : 7', 'Average : 5']);
})

test('Test String Concate function', () => {
    expect(concateString(["Laptop", "PC", "Tablet", "Handphone"]))
    .toBe('Laptop, PC, Tablet, and Handphone');
})

test('Test String to Array function', () => {
    expect(stringToArray("Hello Worlds"))
    .toEqual(['Hello', 'Worlds']);
})

test('Test Sum an Arrays function', () => {
    expect(sumArrays([3, 2, 1], [1, 2, 3, 5, 7]))
    .toEqual([4, 4, 4, 5, 7]);
})

test('Test Add another Element function', () => {
    expect(addElement(["Hello", "Worlds"], "Hello"))
    .toEqual(['Hello', 'Worlds']);
})

test('Test Remove all Odd Numbers function', () => {
    expect(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
    .toEqual([2, 4, 6, 8, 10, 12]);
})