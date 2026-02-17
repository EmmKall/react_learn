import type { CSSProperties } from "react";

export function MyAwesomeApp() {

    const name = 'Emm';
    const last_name = 'Calderon';
    const favoriteGames = ['GTA', 'FIFA', 'Minecraft'];

    const myStyles: CSSProperties = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
        <>
            <h1 data-testid="heading-name">{name}</h1>
            <p data-testid="heading-last_name" style={myStyles}>{last_name}</p>
            <ul data-testid="favoriteGames">
                {favoriteGames.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </>
    )
}