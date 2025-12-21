"use client"
import { createContext, } from "react" 

import { useReducer } from "react"


export const userModalContext=createContext()


const initialState ={ isshow: false , payload:null ,modalType:null}

const reducer =(state,action)=>{
    switch(action.type){
        case "OPEN_MODAL":
        return{...state , isshow:true }
        case "CLOSE_MODAL" :
        return{...state , isshow:false , payload:null }
         case "ADD_MODAL":
        return{...state , isshow:true , payload:null , modalType:"add"}
        case "EDIT_MODAL":
        return{...state , isshow:true , payload:action.payload , modalType:"edit"}
        case "DELETE_MODAL" :
        return{...state , isshow:true , payload:action.payload , modalType:"deleted" }    
    }

}

function ModalContext({children}) {
    const[state,dispatch]=useReducer(reducer,initialState) 

    const openModal=()=>{
        dispatch({type: "OPEN_MODAL" })
    }

    const closeModal=()=>{
        dispatch({type:"CLOSE_MODAL" , payload: null})
    }
    const  addModal=()=>{
        dispatch({type:"ADD_MODAL" })
    }

    const editModal=(product)=>{
        dispatch({type:"EDIT_MODAL" ,payload:product})
    }

    const deleteModal=(product)=>{
     dispatch({type:"DELETE_MODAL" , payload:product})
    }

  return (
     <userModalContext.Provider   value={{openModal,closeModal,state,editModal,addModal,deleteModal,dispatch}}>

         {children}
     </userModalContext.Provider>
  
  )
}

export default ModalContext