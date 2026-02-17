import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ItemCounter } from '../../src/shopping-cart/ItemCounter';

describe('ItemCounter', () => {

    test('Should render with default values', () => {
        // Arrange
        const item = {
            productName: 'Apple',
        }
        // Act
        render(<ItemCounter {...item} />);
        // Assert
        expect(screen.getByText(item.productName)).toBeDefined();
        expect(screen.getByText(item.productName)).toBeTruthy();
    });

    test('Should render with custom quantity', () => {
        // Arrange
        const item = {
            productName: 'Apple',
            quantity: 10
        }
        // Act
        render(<ItemCounter {...item} />);
        // Assert
        expect(screen.getByText(item.productName)).toBeDefined();
        expect(screen.getByText(item.productName)).toBeTruthy();
        expect(screen.getByText(item.quantity.toString())).not.toBeNull();
        expect(screen.getByText(item.quantity.toString())).toBeTruthy();
    });

    test('Should increse when button +1 is press', () => {
        // Arrange
        const item = {
            productName: 'Apple',
            quantity: 10
        }
        // Act
        render(<ItemCounter {...item} />);

        const [, btnPlus] = screen.getAllByRole('button');
        fireEvent.click(btnPlus);
        // Assert
        expect(screen.getByText((item.quantity + 1).toString())).not.toBeNull();
    })

    test('Should decrease when button -1 is press', () => {
        // Arrange
        const item = {
            productName: 'Apple',
            quantity: 10
        }
        // Act
        render(<ItemCounter {...item} />);

        const [btnLess] = screen.getAllByRole('button');
        fireEvent.click(btnLess);
        // Assert
        expect(screen.getByText((item.quantity - 1).toString())).not.toBeNull();
    })

    test('Should p has green class', () => {
        // Arrange
        const item = {
            productName: 'Apple',
            quantity: 6
        }
        const color: string = 'green';
        // Act
        render(<ItemCounter {...item} />);
        const p = screen.getByText(item.quantity.toString());
        // Assert
        expect(p.style.color).toBe(color);
    })

});

