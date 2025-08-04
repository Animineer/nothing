import React from 'react'
import style from "./Footer.module.css"
import SUPPORT from "../../assets/icons/help.svg"
import NEWSLETTER from "../../assets/icons/home.svg"
import STORE from "../../assets/icons/location.svg"
import LANGUAGE from "../../assets/icons/down-arrow.svg"

export const Footer_2 = () => {
  return (
    <div className={style.main_f2}>
        <div>
            <p>SUPPORT</p>
            <img src={SUPPORT} alt="" />
        </div>
        <div>
            <p>NEWSLETTER</p>
            <img src={NEWSLETTER} alt="" />
        </div>
        <div>
            <p>STORE: INDIA</p>
            <img src={STORE} alt="" />
        </div>
        <div>
            <p>LANGUAGE: EN</p>
            <img src={LANGUAGE} alt="" />
        </div>
    </div>
  )
}
