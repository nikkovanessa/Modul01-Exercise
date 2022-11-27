const {
    convert, 
    oddEven,
    prime,
    sum,
    factorial,
    fibonacci
} = require('./DAY02-EXERCISE-ACHMAD_NIKKO_VANESSA');

test('Test Convert function', () => {
    expect(convert(30)).toBe(86);
})

test('Test Odd Even function', () => {
    expect(oddEven(5)).toBe('Odd');
})

test('Test Prime function', () => {
    expect(prime(17)).toBe('Prime');
})

test('Test Sum function', () => {
    expect(sum(5)).toBe(15);
})

test('Test Factorial function', () => {
    expect(factorial(5)).toBe(120);
})

test('Test Fibonacci function', () => {
    expect(fibonacci(10)).toBe(89);
})