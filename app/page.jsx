
import styles from "./storeFront.module.css"
import  Link from "next/link"



const BASE_URL = "http://localhost:3000/products";

export default  async  function Home() {
const res = await fetch(`${BASE_URL}` , {next :{revalidate :60}})
const data = await res.json()
const products = data.data || []




  return (
   <div className={styles.dashbord_table}>
           <table>
             <thead >
               <tr>
                 <th>نام کالا</th>
                 <th>موجودی</th>
                 <th>قیمت</th>
                 <th>درباره محصول</th>
                 
               </tr>
             </thead>
             <tbody>
          {products.map((product)=>
            <tr key={product.id}>
             <td>{product.name}</td>
          <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td> <Link  href={`/products/${product.id}`}>  جزئیات محصول</Link></td>
                 
               
               </tr>
               )}
             </tbody>
           </table>
         </div>
  );
}
