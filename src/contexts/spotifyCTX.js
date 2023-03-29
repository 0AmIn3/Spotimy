import {
    createContext
} from "react";


export const spotify = createContext({
    client_id: "f2e286ece2574ad6b334b55d03764483",
    REDIRECT_URI: "http://127.0.0.1:5173",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})