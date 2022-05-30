import React, { useState, useCallback, useRef, useEffect } from 'react'

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    const activeHttpRequest = useRef([])


    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true)
        const httpAbortController = new AbortController()
        activeHttpRequest.current.push(httpAbortController)
      try {
        const response = await fetch(url, {
            method,
            body,
            headers,
            signal: httpAbortController.signal
        })

        const data = await response.json();
        if (!response.ok) {
          throw new Error(response.message);
        }

        return data
      } catch(err) {
        setError(err.message)
      }

      setIsLoading(false)
    }, [])


    const clearError = () => {
        setError(null)
    }


    useEffect(() => {
        return () => {
            activeHttpRequest.current.forEach(abortController => abortController.abort())
        }
    }, [])

    return {isLoading, error, sendRequest, clearError}
}