"use client"

import { useState } from "react"
import {RotatingLines} from "react-loader-spinner"
import styles from "./Register.module.css"
import axios from "axios"
import { toast } from "react-toastify"
import {useRouter} from "next/navigation"
import { useProductForm } from "../../../helpers/code"



function register() {
const router = useRouter()
 const[loading,setLoading]=useState(false)
 const[issending,setIssending]=useState(false)
 const { register, handleSubmit, formState: { errors } } = useProductForm();



 

const onsubmit=(data)=>{

  axios.post( 'http://localhost:3000/auth/register',data)
   .then((res)=>{console.log(res)
     setLoading(false)
   
   router.push("/login") 
   toast.success("ثبت نام با موفقیت انجام شد")
    setIssending(false)
    })

  .catch((err)=>{
    console.log(err);
    
    setLoading(false)
    setIssending(false)
     if(err.response && err.response.data){
       toast.error(err.response.data.message)
    }
})

}




  return (
     <>
    <h1 className={styles.registerTitle}>بوت کمپ بوتواستارت </h1>
   {loading ? <RotatingLines /> : <div  className={styles.register} > 
    <div >
        <img src={'1.png'} alt="بوتواستارت" />
        <h1 className={styles.registerForm} >فرم ثبت نام</h1>
        <div >
        <form  onSubmit={handleSubmit(onsubmit)}>
        <input type="text" placeholder="نام کاربری" {...register("username")} />
         {errors.name && <p>{errors.name.message}</p>}

        <input type="password" placeholder="رمز عبور"  {...register("password")}/>
         {errors.password && <p>{errors.password.message}</p>}

        <input type="password"  placeholder="تکرار رمز عبور"  {...register("repeatPassword")} />
        {errors.repeatPassword &&  <p>{errors.repeatPassword.message}</p>}
  

      
        <button type="submit" disabled={issending}  className={issending ? styles.disabled :""}>ثبت نام</button>  </form>
          </div>
         
      
        
        <p> حساب کاربری دارید؟</p>
      
    </div>

    </div> }
   
    </>
    
  )
}

export default register