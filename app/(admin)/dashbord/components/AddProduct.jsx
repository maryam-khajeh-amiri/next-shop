"use client"

import axios from "axios";
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from "react";
import { userModalContext } from "../context/ModalContext"
import { authUserContext } from "../../../Wrapper";
import styles from "./addproduct.module.css"
import { toast } from "react-toastify"
import { addProduct } from "@/helpers/ApiAddress";

function AddProduct() {
  const{closeModal}=useContext(userModalContext)
  const{token}=useContext(authUserContext)


const schema=yup.object().shape({
  name:yup.string().required(),
  quantity:yup.number().integer(),
  price:yup.number().positive()
})

const{register, handleSubmit}=useForm({
 resolver:yupResolver(schema)


})


const onsubmit=(data)=>{
addProduct(data, token)
.then((res)=>{
  console.log(res.data);
  
    closeModal()
 toast.success(" محصول افزوده شد")

}

)


.catch((err)=>{
  console.log(err);
  
})

}


  return (
    <div className={styles.madalContainer} >
      <div className={styles.overlay}  onClick={closeModal}  ></div>
    <div  className={styles.modal}>
            <h3>ایجاد محصول جدید</h3>
            <form onSubmit={handleSubmit(onsubmit)} >
            <p>نام کالا</p>
            <input type="text" placeholder='نام کالا' {...register("name")}  />
            <p>تعداد موجودی</p>
            <input type="text" placeholder='تعداد موجودی' {...register("quantity")}      />
            <p>قیمت</p>
            <input type="text" placeholder='قیمت'    {...register("price")}     />
            <div>
                <button type='submit'  className={styles.createData} >ایجاد</button>
                <button onClick={closeModal}>انصراف</button>
               
            </div>
            </form>
        </div>

    </div>
  )
}

export default AddProduct