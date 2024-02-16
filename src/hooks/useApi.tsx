import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export function useApi<T>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  const callApi = async (): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const response: AxiosResponse<T> = await axios(url, options)
      setData(response.data)
    } catch (err: any) {
      setError(err)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    callApi()
  }, [])

  return { data, isLoading, error, callApi }
}
