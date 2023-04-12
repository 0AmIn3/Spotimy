import {
    createContext
} from "react";

let actualURL = import.meta.url.split('/src')[0].split(':')
actualURL = actualURL[0] + "://localhost:" + actualURL.at(-1)


export const spotify = createContext({
    client_id: import.meta.env.VITE_API_KEY,
    REDIRECT_URI: actualURL,
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

    