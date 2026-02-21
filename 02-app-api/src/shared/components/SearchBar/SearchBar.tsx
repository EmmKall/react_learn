import { useEffect, useState } from "react";

interface Props {
    placeholder: string;
    onSearchChange: (search: string) => void;
}

export const SearchBar = ({ placeholder = 'Search ...', onSearchChange }: Props) => {

    const [search, setSearch] = useState('');

    const handleSearch = () => {
        onSearchChange(search);
        setSearch('');
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearchChange(search);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [search])

    return (
        <>
            <div className="search-container">
                <input type="text" placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
        </>
    )
}