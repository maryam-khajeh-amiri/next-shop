import {CiSearch} from "react-icons/ci"
import { CiLogout} from "react-icons/ci"
import styles from "./Search.module.css"
import { useRef , useEffect } from "react"




function Search({logout , searchHandler , searchQuery }) {
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current?.focus()
  },[])


  return (
   <div  className={styles.dashbord_search}>

       <CiLogout className={styles.logout}    onClick={logout}/> 
       <input type="text" placeholder="جستجوی کالا" ref={inputRef}   value={searchQuery} onChange={searchHandler}/>
       <CiSearch   className={styles.searchIcon}/>
      </div>
    
  )
}

export default Search