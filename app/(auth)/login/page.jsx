"use client"

import { toast } from "react-toastify"
import styles from "./Login.module.css"
import { RotatingLines } from "react-loader-spinner"
import {  useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { authUserContext } from "../../Wrapper"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


function Login() {

const router= useRouter()
  const{login}=useContext(authUserContext)
 
 const[loading,setLoading]=useState(false)
const[issending,setIssending]=useState(false)





 
 const schema=yup.object().shape({
username: yup.string().required("نام را وارد کنید"),
password: yup.string().min(6,"رمز حداقل می بایست 6 کاراکتر باشد").required(),
 })
 const{register, handleSubmit,formState: { errors }}=useForm({
  resolver:yupResolver(schema)
 })



const onsubmit=(data)=>{
setLoading(true)
axios.post('http://localhost:3000/auth/login' , data)
  .then((res)=>{
    console.log(res);
    login(res.data.token)
   router.push("/dashbord") 
    
     toast.success("ورود با موفقیت انجام شد")
    setLoading(false)
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
       <h1 className={styles.loginTitle}>بوت کمپ بوتواستارت </h1>
       {loading? <RotatingLines />:    <div className={styles.login} > 
       <div >
           <img src={"1.png"} alt="بوتواستارت" />
        <h1 className={styles.loginForm} >فرم ورود</h1>
           <form  onSubmit={handleSubmit(onsubmit)}>
           <input type="text" placeholder="نام کاربری"  {...register("username")}/>
           {errors.username && <p>{errors.username.message}</p>}

           <input type="password" placeholder="رمز عبور"   {...register("password")} />
           {errors.password && <p>{errors.password.message}</p>}

           <button type="submit"  disabled={issending}>ورود</button>
           </form> 
           
           <p>ایجاد حساب کاربری!</p>

       </div>
       </div>

}
    
       </>
  )
}

export default Login