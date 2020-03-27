import { useEffect, useState } from 'react'

export function useGetData (apiUrl) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // function to execute on render, array with dependencies to re render
  // when is empty array functión like componentDidmount
  useEffect(function () {
    setLoading(true)
    window.fetch(apiUrl)
      .then(res => res.json())
      .then(response => setData(response))
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, loading, error }
}
