const Calculator = require('./test.js');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers correctly', () => {
        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.add(-1, 1)).toBe(0);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(-1, 1)).toBe(-1);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('divides two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(5, 2)).toBe(2.5);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
});