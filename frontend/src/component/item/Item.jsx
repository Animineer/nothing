import React from 'react'
import style from "./Item.module.css"

function Item(props) {
  return (
    <div className={style.main}>

      
        <img className={style.image}src={props.image} alt="" />
        <h6 className={style.model} >{props.model}</h6>
        <p className={style.price}>£{props.price}</p>
        
    </div>
  )
}

export default Item