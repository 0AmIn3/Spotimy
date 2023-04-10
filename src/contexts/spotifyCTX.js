import {
    createContext
} from "react";


export const spotify = createContext({
    client_id: '919136d06615483ba8d995792fec91e3',
    REDIRECT_URI: "http://localhost:5178/",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

    