"use client"

import styles from "./dashbord.module.css"
import { useContext} from "react"
import { authUserContext } from "../../Wrapper"
import ProtectedRoute from "./components/ProtectedRoute"
import { userModalContext } from "./context/ModalContext"
import AddProduct from "./components/AddProduct"
import EditProduct from "./components/EditProduct"
import DeletedProduct from "./components/DeleteProduct"
import Paginate from "./components/Paginate"
import {RotatingLines} from "react-loader-spinner"
import Products from "../products/Products"
import  Search  from  "./components/Search" 
import useProducts from "../../hooks/UseProducts"



function Dashbord() {

const{token,logout}=useContext(authUserContext)
const{state,addModal,editModal,deleteModal}=useContext(userModalContext)

const {
  products,
  loading,
  errors,
  currentPage,
  setCurrentPage,
  setTotalPage,
  searchQuery,
  searchHandler,
  totalPage,
  updateProductId,
  deletedProductId,
  filteredProducts
} = useProducts(token)




  return (
    <ProtectedRoute>
    <>
  {loading ? (<RotatingLines/>):<div>  {state.isshow  && state.modalType==='add' && <AddProduct />}
  {state.isshow && state.modalType==="edit" && <EditProduct  updateProductId={updateProductId}/>}
  {state.isshow && state.modalType==="deleted" && <DeletedProduct  deletedProductId={deletedProductId}/>}
    <div >
      
      <Search  logout={logout}  searchHandler={searchHandler} searchQuery={searchQuery} />
      <div  className={styles.dashbord}>

        <div className={styles.dashbord_manage}>
         <h3>مدیریت کالا</h3>
        <img src={'2.png'} alt="مدیریت کالا" />
        </div>
      
        <button  onClick={()=>addModal()}>افزودن محصول</button>
      </div>
    
      <Products  products={products} editModal={editModal}  deleteModal={deleteModal}  filteredProducts={filteredProducts}/>
      <div>

    <Paginate currentPage={currentPage}  setCurrentPage={setCurrentPage} totalPage={totalPage}  setTotalPage={setTotalPage}   />
      </div>
    </div> 
      </div>
  }
    </>
  </ProtectedRoute>
   
  )
}

export default Dashbord