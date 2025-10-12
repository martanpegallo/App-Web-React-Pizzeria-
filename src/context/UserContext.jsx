import React from 'react'
import { createContext, useState } from 'react' 

export const UserContext = createContext();

function UserProvider({children}) {

  const [token, setToken] = useState(true);
  function logout() {
    setToken(false);
  }
  function login() {
    setToken(true);
  }
  const value = { token, logout, login };
  return (
    <UserContext.Provider value={value}> 
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
