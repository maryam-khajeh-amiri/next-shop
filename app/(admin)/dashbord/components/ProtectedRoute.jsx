"use client"


import { useContext, useEffect } from "react"
import { authUserContext } from "../../../Wrapper"
import {useRouter} from "next/navigation"




function ProtectedRoute({children}) {
  const{isLogin}=useContext(authUserContext)
  const router = useRouter()
  
useEffect(() => {
    if (isLogin === false) {
      router.push("/login")
    }
  }, [isLogin, router])


 if (!isLogin) {
    router.push("/login") 
        return null     
  }
 




  return (
   <div>{children}</div>
  )
}

export default ProtectedRoute