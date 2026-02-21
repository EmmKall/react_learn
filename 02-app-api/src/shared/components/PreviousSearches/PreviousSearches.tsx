import type { FC } from "react";

interface Props {
    searches: string[];
    title: string;
    updateItems: (search: string) => void;
}

export const PreviousSearches: FC<Props> = ({ title, searches = [], updateItems }) => {
    return (
        <>
            <div className="previous-searches">
                <h2>{title}</h2>
                <ul className="previous-searches-list">
                    {searches.map((search) => (
                        <li key={search} onClick={() => updateItems(search)}>{search}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
