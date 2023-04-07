import {
    createContext
} from "react";


export const spotify = createContext({
    client_id: "bd68c3ce650049079d488d42f6b08548",
    REDIRECT_URI: "http://localhost:5173",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

