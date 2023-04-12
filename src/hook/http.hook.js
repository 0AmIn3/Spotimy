import { useCallback, useContext, useState } from "react";
import { tokenCTX } from "../contexts/tokenCTX";


export const useHttp = () => {    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const token = useContext(tokenCTX)

    const request = useCallback(async (url, method = "GET", body = null, headers = {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}) => {
        setLoading(true)

        try {
            if(body) {
                body = JSON.stringify(body)
            }
            const res = await fetch(url, {method, body, headers})

            if(!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`)
            }

            const data = await res.json()

            setLoading(false)

            return data

        } catch (error) {
            setLoading(false)
            setError(error.message)

            throw error
        }


    }, [])

    return {
        loading,
        error,
        request
    }
}