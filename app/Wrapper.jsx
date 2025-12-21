"use client"
import { createContext, useContext, useState } from "react"



export  const authUserContext= createContext()

// import { authUserContext } from "@/context/AuthContext"

function Wrapper({children}) {
   const[isLogin,setIsLogin]=useState(()=>{
    return(JSON.parse(localStorage.getItem("isLogin")) || false )
})

console.log(localStorage.getItem("isLogin"));


const[token,setToken]=useState(()=>{
    return(localStorage.getItem("token") || "")
})
console.log(localStorage.getItem("token"));






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