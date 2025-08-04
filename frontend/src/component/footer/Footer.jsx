import React from 'react'
import style from "./Footer.module.css"
import { Footer_1 } from './Footer_1'
import { Footer_2 } from './Footer_2'
import { Footer_last } from './Footer_last.jsx'

export const Footer = () => {
  return (
    <div className={style.allf} >
        <Footer_1></Footer_1>
        <Footer_2></Footer_2>
        <Footer_last></Footer_last>
    </div>
  )
}
