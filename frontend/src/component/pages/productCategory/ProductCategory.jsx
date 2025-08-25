
import { useContext } from 'react'
import { allContext } from '../../context/ShopContext'
import Item from '../../Item'

function ProductCategory() {

  const all=useContext(allContext)

  // console.log(all[0]) 
  //always console the value to check wheter it is passed or not
  
  
  return (
  
    <div>
      {
        all.map((item,i)=>{
           if(props.category===item.category){
          return(
           <Item key={i} id={item.id} image={item.image} model={item.model} price={item.price} ></Item>
          )}
        })
      }

    </div>
  
  )

}

export default ProductCategory