
import { describe, test, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FirstStepsApp } from '../src/FirstStepsApp';

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid="item-counter" />;
});

vi.mock('../src/shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

/* vi.mock('../src/shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => <div data-testid="item-counter" key={props.productName} productName={props.productName} quantity={props.quantity} />
})); */

describe('FirstStesApp', () => {

    afterEach(() => {
        mockItemCounter.mockClear();
    });

    test('should render', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toBeDefined();
    });

    test('should render the correct number of ItemCounter components', () => {
        // Arrange
        const expectedItemCounterComponents = 3;
        render(<FirstStepsApp />);
        // Act
        const itemCounterComponents = screen.getAllByTestId('item-counter');
        // Assert
        expect(itemCounterComponents.length).toBe(expectedItemCounterComponents);
    });

    test('Should render with correct props', () => {
        // Arrange
        const products = [
            { productName: 'Product 1', quantity: 1 },
            { productName: 'Product 2', quantity: 2 },
            { productName: 'Product 3', quantity: 3 },
        ];
        render(<FirstStepsApp />);
        const timesCalled: number = 3;
        // Act

        // Assert
        expect(mockItemCounter).toHaveBeenCalledTimes(timesCalled);
        expect(mockItemCounter).toHaveBeenCalledWith(products[0]);
        expect(mockItemCounter).toHaveBeenCalledWith(products[1]);
        expect(mockItemCounter).toHaveBeenCalledWith(products[2]);
    })

})
