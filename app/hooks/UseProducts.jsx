import {  useState ,useEffect} from "react"
import {getProduct} from "../../helpers/ApiAddress"

function UseProducts(token) {
const[products,setProducts]=useState([])
const[loading,setLoading]=useState(false)
const[errors,setErrors]=useState("")
const[currentPage,setCurrentPage]=useState(1)
const[searchQuery,setSearchQuery]=useState("")
const[limit,setLimit]=useState(10)
const[totalPage,setTotalPage]=useState(0)


const searchHandler =(e)=>{
setSearchQuery(e.target.value)
setCurrentPage(1)
}


useEffect(()=>{

  setLoading(true)
getProduct({currentPage ,limit , searchQuery} , token)
.then((data)=>{
   setProducts(data.data)
     setTotalPage(data.totalPages)
    setLoading(false)
  })
  .catch((err)=>{
    setLoading(false)
    setErrors(err.message)
  })
},[token,currentPage,searchQuery])


const updateProductId=(updateProduct)=>{
setProducts((prev)=>prev.map((item)=>item.id===updateProduct.id ?updateProduct :item))
}

const deletedProductId=(deleteProduct)=>{
 setProducts((prev)=>prev.filter(item=>item.id !== deleteProduct.id))
}






  return {
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
  }
    
  
}

export default UseProducts