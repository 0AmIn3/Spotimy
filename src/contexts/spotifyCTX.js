import {
    createContext
} from "react";


export const spotify = createContext({
    client_id: "914d069760c541d9b9f93c5ca4e66b50",
    REDIRECT_URI: "http://127.0.0.1:5173/",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

