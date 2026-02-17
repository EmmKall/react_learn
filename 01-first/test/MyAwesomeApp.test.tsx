import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './../src/MyAwesomeApp';

describe('MyAwesomeApp', () => {
    //Arrange
    const name = 'Emm';
    const last_name = 'Calderon';
    const favoriteGames = ['GTA', 'FIFA', 'Minecraft'];

    test('Should has name and last_name', () => {
        // Arrange
        const { container } = render(<MyAwesomeApp />);
        // screen.debug(container);
        const h1 = container.querySelector('h1');
        const p = container.querySelector('p');

        // Assert
        expect(h1?.innerHTML).toContain(name);
        expect(p?.innerHTML).toContain(last_name);
    });

    test('Should has name and last_name screen debug', () => {
        // Arrange
        render(<MyAwesomeApp />);
        //const h1 = screen.getByRole('heading', {level: 1});
        const h1 = screen.getByTestId('heading-name');
        const p = screen.getByTestId('heading-last_name');
        // Assert
        expect(h1?.innerHTML).toContain(name);
        expect(p?.innerHTML).toContain(last_name);
    });

    test('Should has favoriteGames', () => {
        // Arrange
        const { container } = render(<MyAwesomeApp />);
        // screen.debug(container);
        const ul = container.querySelector('ul');
        const li = ul?.querySelectorAll('li');
        // Assert
        expect(li?.length).toBe(favoriteGames.length);
    });

    test('Should has favoriteGames', () => {
        // Arrange
        render(<MyAwesomeApp />);
        const ul = screen.getByRole('list');
        const li = ul?.querySelectorAll('li');
        // Assert
        expect(li?.length).toBe(favoriteGames.length);
    });

    test('Should match snapshot', () => {
        // Arrange
        const { container } = render(<MyAwesomeApp />);
        // Assert
        expect(container).toMatchSnapshot();
    });

});