import React from 'react'
import { createContext, useState } from 'react' 

export const UserContext = createContext();

function UserProvider({children}) {

  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)

//funcion para hacer login
  async function login(email, password) {
    try {
      const res = await fetch ('http://localhost:5000/api/auth/login',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      });
      const data = await res.json();
      setToken(data.token);
      setEmail(data.email);

    } catch (error) {
      console.error("Error during login:", error.message);
    }
  }
//funcion para hacer register
  async function register(email, password) {
    try {
      const res = await fetch ("http://localhost:5000/api/auth/register",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      });
      const data = await res.json();
      setToken(data.token);
      setEmail(data.email);

    } catch (error) {
      console.error("Error during login:", error.message);
    }
  }
//funcion para hacer logout
  function logout() {
    setToken(null)
    setEmail(null)
  };
//funcion para obtener el profile
  async function getProfile(){
    try {
      const res = await fetch ("http://localhost:5000/api/auth/me",{
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
      })
      const data = await res.json();
      setEmail(data.email);
      return data;
    } catch (error) {console.error("Error fetching profile:", error.message);
    };
  };

  const value = { token, email, logout, login, register, getProfile };
  return (
    <UserContext.Provider value={value}> 
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
