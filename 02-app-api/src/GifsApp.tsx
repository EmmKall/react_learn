import { useEffect, useState } from "react"

import { getGifsByQuery } from "./gifs/components/GiftList/services/getGifs.service"

import { mockGifs, type Gif } from "./mock-data/gifs-mock"
import { CustomHeader } from "./shared/components/CustomHeader/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar/SearchBar"
import { PreviousSearches } from "./shared/components/PreviousSearches/PreviousSearches"
import { GiftList } from "./gifs/components/GiftList/GiftList"

export const GifsApp = () => {

    const [gifs, setGifs] = useState<Gif[]>(mockGifs)
    const [items, setItems] = useState<string[]>([]);
    const [results, setResults] = useState<any[]>([]);

    const updateSearchs = async (search: string) => {
        if (!search || search.trim().length <= 1) return;
        const item = search.toLowerCase();
        if (items.includes(item)) {
            updateItems(item);
            return;
        };
        if (item.length <= 1) return;
        setItems([item, ...items].slice(0, 9));

        //API
        const data = await getGifsByQuery(item);
        setResults([...results, { search: item, items: data }]);
    }

    const updateItems = (search: string) => {
        console.log(search);
        results.forEach(({ search, items }: { search: string, items: Gif[] }) => {
            if (search === search) { setGifs(items) }
        })
    }

    useEffect(() => {
        console.log({ items });
    }, [items])

    return (
        <>
            {/* Header */}
            <CustomHeader title="Search Gifs" description="Discover and share a perfect gif for every moment" />
            {/* search */}
            <SearchBar placeholder="Search a gif" onSearchChange={updateSearchs} />
            {/* Previous searches */}
            <PreviousSearches title="Previous searches" searches={items} updateItems={updateItems} />

            {/* Listado de Gifs */}
            <GiftList gifs={gifs} />

        </>
    )
}  
