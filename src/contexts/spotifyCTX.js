import {
    createContext
} from "react";


export const spotify = createContext({
    client_id: import.meta.env.VITE_API_KEY,
    REDIRECT_URI: "http://localhost:5173",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

