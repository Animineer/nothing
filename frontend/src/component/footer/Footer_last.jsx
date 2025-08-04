import React from 'react'
import style from "./Footer.module.css"
export const Footer_last = () => {
  return (
    <div className={style.mainfooter}>
         <ul className={style.last_ul1}type="none">
        <li>COMMUNITY</li>
        <li>STORES</li>
        <li>CONTACT</li>
        <li>CAREERS</li>
        <li>LEGAL</li>
        </ul>

        <ul className={style.last_ul1} type="none">
            <li>INSTAGRAM</li>
            <li>YOUTUBE</li>
            <li>X</li>
            <li>TIKTOK</li>
        </ul>
    </div>
  )
}
