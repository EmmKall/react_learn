import axios from "axios";
import type { GifAppI, GiphyGifI, GiphyResponseI } from "../interfaces/ghphyI.response";

export const getGifsByQuery = async (query: string): Promise<GifAppI[]> => {
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const url: string = `https://api.giphy.com/v1/gifs/search`;
    const response = await axios.get<GiphyResponseI>(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            api_key: apiKey,
            q: query,
            limit: 25,
            offset: 0,
            rating: 'g',
            lang: 'en',
            bundle: 'messaging_non_clips'
        }
    });
    const data = response.data.data;
    return data.map((gif: GiphyGifI) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
}
