"use client"

import { useContext, useEffect, useState } from "react"
import styles from "./addproduct.module.css"
import {yupResolver} from "@hookform/resolvers/yup"
import { userModalContext } from "../context/ModalContext"
import { authUserContext } from "../../../Wrapper"
import { toast } from "react-toastify"



import {useForm} from "react-hook-form"
import * as yup from "yup" 
import axios from "axios"


function EditProduct({updateProductId}) {
 const{closeModal,state}=useContext(userModalContext)
 const{token}=useContext(authUserContext)



const schema=yup.object().shape({
     name:yup.string().required("نام باید وارد شود"),
      quantity:yup.number().integer(),
      price:yup.number().positive()
})
const{register, handleSubmit,setValue}=useForm({
 resolver:yupResolver(schema)
})

useEffect(()=>{
 
setValue("name",state.payload.name)
setValue("quantity",state.payload.quantity)
setValue("price",state.payload.price)
},[])


const onsubmit=(data)=>{

    axios.put(`http://localhost:3000/products/${state.payload.id}` ,data, {headers:{Authorization: `Bearer ${token}`}})
    .then((res)=>{
      console.log(res)
      updateProductId(res.data)
      closeModal()
       toast.success(" ویرایش با موفقیت انجام شد")
     
      
    })
    .catch((err)=>{
      console.log(err)
    
      
    })
}




  return (
    <div className={styles.modalContainer}>
      <div className={styles.overlay}  onClick={closeModal}></div>
         <div  className={styles.modal}>
                    <h3>ویرایش اطلاعات</h3>
                    <p>نام کالا</p>
                    <form onSubmit={handleSubmit(onsubmit)} >
                    <input type="text" placeholder='نام کالا' {...register("name")}  />
                    <p>تعداد موجودی</p>
                    <input type="text" placeholder='تعداد موجودی' {...register("quantity")}      />
                    <p>قیمت</p>
                    <input type="text" placeholder='قیمت'    {...register("price")}     />
                    <div>
                        <button type='submit'  className={styles.createData}  >ثبت اطلاعات جدید</button>
                        <button onClick={closeModal}>انصراف</button>
                       
                    </div>
                    </form>
                </div>
    </div>
  )
}

export default EditProduct