import React from 'react'
import style from "../styles/hero.module.scss"
import { TbBrandLinkedin } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import { IoIosArrowDropdown } from 'react-icons/io'

function Hero() {
  return (
    <div id="hero" className={style.hero}>
        <div className={style.hero__main}>
            <div className={style.hero__info}>
                <h1>Wasinee<br/>Siewsrichol</h1>
                <div>
                   <span className={style.hero__title}>data scientist</span>
                    <span></span> 
                </div>
                
                <div className={style.nav_links}>
                    <a href="#">
                        <TbBrandLinkedin size={"3.5rem"}/>
                    </a>
                    <a href="#">
                        <AiFillGithub size={"3rem"}/>
                    </a>
                </div>
            </div>
        </div>
        <div className={style.hero__arrow}>
            <IoIosArrowDropdown size={"3rem"}/>
        </div>
    </div>
  )
}

export default Hero