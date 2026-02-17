import { test, expect, describe } from 'vitest';
import { add, substract, multiply, divide } from '../../src/helpers/math.helper';

describe('math', () => {

    test('add', () => {
        //Arragne
        const a: number = 1;
        const b: number = 2;

        //Act
        const result = add(a, b);

        //Assert
        expect(result).toBe(a + b);
    });

    test('substract', () => {
        //Arragne
        const a: number = 1;
        const b: number = 2;

        //Act
        const result = substract(a, b);

        //Assert
        expect(result).toBe(a - b);
    });

    test('multiply', () => {
        //Arragne
        const a: number = 1;
        const b: number = 2;

        //Act
        const result = multiply(a, b);

        //Assert
        expect(result).toBe(a * b);
    });

    test('divide', () => {
        //Arragne
        const a: number = 1;
        const b: number = 2;

        //Act
        const result = divide(a, b);

        //Assert
        expect(result).toBe(a / b);
    });
});
