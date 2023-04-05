import {
    createContext
} from "react";


export const spotify = createContext({
    client_id: "374a80b0aa954ee1b56a9b117dd296a9",
    REDIRECT_URI: "http://localhost:5173",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

