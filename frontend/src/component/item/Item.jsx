import React from 'react'
import style from "./Item.module.css"

function Item(props) {
  return (
    <div className={style.main}>
        <img className={style.image}src={props.image} alt="" />
        <h3 className={style.model} >{props.model}</h3>
        <p className={style.price}>£{props.price}</p>
    </div>
  )
}

export default Item