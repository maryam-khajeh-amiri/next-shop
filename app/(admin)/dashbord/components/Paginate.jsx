"use client"


import styles from "./paginate.module.css"

function Paginate({currentPage,setCurrentPage,totalPage}) {
  if (totalPage <= 1) return null; 

  const previousHandler=()=>{


    if(currentPage <=1) return

  setCurrentPage((prev)=>prev -1)
  }
  const oneHandler=()=>{
   setCurrentPage(1)
  }
  
  const nextHandler=()=>{
    if(currentPage >=totalPage) return

setCurrentPage((next)=>next+1)
  }

const endHandler=()=>{
setCurrentPage(totalPage)
}

  return (
   
<div  className={styles.paginate}  >

        <button  onClick={nextHandler}   className={currentPage===currentPage ? styles.disable : null } >next</button>
  <span  onClick={endHandler}   className={currentPage===currentPage ? styles.selected : null }       >{totalPage}    </span>

      
        
  
        {currentPage>=2 && currentPage<=totalPage && ( <>
          <p>...</p>
          <span className={styles.selected}  >{currentPage}</span>
          </>)} 
          <p>...</p>
        <span onClick={oneHandler}   className={currentPage===1 ? styles.selected : null }   >1</span>
         <button onClick={previousHandler}  className={currentPage===1 ? styles.disable : null }>previous</button>
        </div>
   
  )
}

export default Paginate