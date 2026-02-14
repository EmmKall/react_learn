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
            <h1>{name}</h1>
            <p style={myStyles}>{last_name}</p>
            <ul>
                {favoriteGames.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>
        </>
    )
}