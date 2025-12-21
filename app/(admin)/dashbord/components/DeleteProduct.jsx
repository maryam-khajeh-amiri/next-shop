"use client"

import React, { useContext, useEffect, useState } from 'react'

import styles from "./deleteproduct.module.css"
import { userModalContext } from "../context/ModalContext"
import {useForm} from "react-hook-form"
import { authUserContext } from "../../../Wrapper"
import { deleteProduct } from '@/helpers/ApiAddress'
import { toast } from "react-toastify"


function DeletedProduct({deletedProductId}) {

   const{closeModal,state}=useContext(userModalContext)
   const{token}=useContext(authUserContext)
 
   const{handleSubmit}=useForm({})

   const onsubmit=()=>{
    const productId = state.payload?.id
    if(!productId) return

  deleteProduct(token,productId)
   .then((res)=>{
    console.log(res);
    deletedProductId(productId)
    closeModal()
     toast.success(" حذف با موفقیت انجام شد")
    
    
   }
 
   )
   .catch((err)=>console.log(err)
   )
   }

  return (
    <div className={styles.modalContainer} >
    <div className={styles.overlay}  onClick={closeModal}></div>
    <div className={styles.delete}>
      <img  src={"3.png"} alt='delete_item' />
      <p>آیا از حذف این محصول مطمئنید؟</p>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
        <button type='submit' className={styles.deletedButton} >حذف</button>
        <button onClick={closeModal}>لغو</button>
        </form>
      </div>
      
    </div>
    </div>
  )
}

export default DeletedProduct