import {
    createContext
} from "react";

const actualURL = import.meta.url.split('/src')[0]
console.log(import.meta.env.VITE_API_KEY);
console.log(actualURL);

export const spotify = createContext({
    client_id: '914d069760c541d9b9f93c5ca4e66b50',
    REDIRECT_URI: actualURL,
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token"
})

    