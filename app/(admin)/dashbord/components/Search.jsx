import {CiSearch} from "react-icons/ci"
import { CiLogout} from "react-icons/ci"
import styles from "./Search.module.css"




function Search({logout , searchHandler , searchQuery , }) {


  return (
   <div  className={styles.dashbord_search}>

       <CiLogout className={styles.logout}    onClick={logout}/> 
       <input type="text" placeholder="جستجوی کالا"  value={searchQuery} onChange={searchHandler}/>
       <CiSearch   className={styles.searchIcon}/>
      </div>
    
  )
}

export default Search