import React from 'react'
import style from "./Header.module.css"
import menu from "../../assets/icons/menu.svg"
import cart from "../../assets/icons/cart.svg"


const Header = () => {

  return (
    <>
      
        <div className={style.main}>
          <img src={menu} alt="" />
          <img src={cart} alt="" />
        </div>
        <div className={style.menu_bar}>

        </div>
      
    </>
  )
}

export default Header