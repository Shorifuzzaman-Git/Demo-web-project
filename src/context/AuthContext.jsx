import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext({ user: null })

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to parse user from storage', e)
    }
  }, [])

  const login = (userObj) => {
    setUser(userObj)
    try {
      localStorage.setItem('user', JSON.stringify(userObj))
    } catch (e) {}
  }

  const logout = () => {
    setUser(null)
    try {
      localStorage.removeItem('user')
    } catch (e) {}
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
