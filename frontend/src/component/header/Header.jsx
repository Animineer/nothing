import React, { useRef } from 'react'
import style from "./Header.module.css"
import menu from "../../assets/icons/menu.svg"
import cart from "../../assets/icons/cart.svg"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { Footer_1 } from '../footer/Footer_1'



const Header = () => {
  


  return (
    <>
       <div className={style.empty}>
        <div  className={style.main}>
          <img onClick={menubar}   className={style.menu}src={menu} alt="" />
          <div ><Link to="/"><img className={style.logo} src={logo} alt="" /></Link></div>
          <img className={style.cart} src={cart} alt="" />
        </div>
        <div className={style.menu_bar}>

        </div>
        <div className={style.hidmenu}>

        </div>
      </div>
    </>
  )
}

export default Header