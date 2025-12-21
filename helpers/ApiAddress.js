
import axios from "axios";

const BASE_URL = "http://localhost:3000/products";


 export const getProduct=({currentPage= 1 , limit=10 , searchQuery=""} , token)=>{
   return  axios.get(`${BASE_URL}?page=${currentPage}&limit=${limit}&search=${searchQuery}` ,
    {headers:{Authorization:`Bearer ${token}`}})
  .then((res)=> res.data
  )
  .catch((err)=>{
    throw err
  })

 }

 export const addProduct=(data,token)=>{
    return  axios.post( BASE_URL  , data ,{headers:{Authorization :`Bearer ${token}`}})
 }

 export const deleteProduct=(token,id)=>{
    return axios.delete(`${BASE_URL}/${id}` ,{headers:{Authorization:`Bearer ${token}`}})
 }
 