
import { useContext } from 'react'
import { allContext } from '../../context/ShopContext'
import Item from '../../item/Item'
import { useParams } from "react-router-dom";
import style from "./ProductCategory.module.css"


function ProductCategory() {
  const { category } = useParams(); 

  const all=useContext(allContext)

  // console.log(all[0]) 
  //always console the value to check wheter it is passed or not
  
  
  
  return (
  
    <div className={style.ProductCategory_main}>
      <h3>{category}</h3>
      <div className={style.ProductCategory_sub}>
        {all.filter(item => item.category === category).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            model={item.model}
            price={item.price}
          />
          
        ))}</div>
    </div>
      

    
  
  )

}

export default ProductCategory