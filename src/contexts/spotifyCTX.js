import {
    createContext
} from "react";

const actualURL = import.meta.url.split('/src')[0]

console.log(actualURL);

export const spotify = createContext({
    client_id: import.meta.env.VITE_API_KEY,
    REDIRECT_URI: actualURL,
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

    