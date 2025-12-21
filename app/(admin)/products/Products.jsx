import { MdEdit} from "react-icons/md"
import{ MdDelete} from "react-icons/md"
import styles from "./Products.module.css"

function Products({products,editModal,deleteModal}) {
  return (
   <div className={styles.dashbord_table}>
            <table>
              <thead >
                <tr>
                  <th>نام کالا</th>
                  <th>موجودی</th>
                  <th>قیمت</th>
                  <th>شناسه کالا</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product)=>
                 <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>{product.id}</td>
                  <td><button onClick={()=>editModal(product)}><MdEdit className={styles.editlogo} /></button>
                  <button onClick={()=>deleteModal(product)}><MdDelete className={styles.deletelogo} /></button>
                  
                  </td>
                  
                </tr>
                )}
               
              </tbody>
            </table>
          </div>
  )
}

export default Products