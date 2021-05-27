import React, { useEffect, useState } from 'react'
import stateChanged from './utils/stateChanged'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(0)

  useEffect(_ => {
    fetchData()
  }, [])

  const fetchData = async _ => {
    const response = await fetch('https://fakestoreapi.com/products')
    const dataResponse = await response.json()
    setData(dataResponse)
  }

  return (
    <AuthContext.Provider
      value={{
        data
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}