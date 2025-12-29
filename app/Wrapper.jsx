"use client"
import { createContext, useContext, useEffect, useState } from "react"



export  const authUserContext= createContext()



function Wrapper({children}) {
   const[isLogin,setIsLogin]=useState(false)
   const[token,setToken]=useState("")
     const [loading, setLoading] = useState(true)

useEffect(()=>{
const savedLogin = localStorage.getItem("isLogin")
const savedToken = localStorage.getItem("token")

if (savedLogin === "true") {
      setIsLogin(true)
    }

    if (savedToken) {
      setToken(savedToken)
    }
  setIsLogin(false)
},[])


   const login=(tokenValue)=>{
   
    setToken(tokenValue)
    setIsLogin(true)


localStorage.setItem("token" , tokenValue)
localStorage.setItem("isLogin" ,true)

   }

   const logout=()=>{
    setIsLogin(false)
    setToken("")
    

    localStorage.removeItem("token")
    localStorage.removeItem("isLogin")
   
   }


  return (
        <authUserContext.Provider  value={{login,logout,isLogin,token}}>
           
      {children}
     </authUserContext.Provider>
  )
}

export default Wrapper