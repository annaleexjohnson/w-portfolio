import React from 'react'
import style from "../styles/hero.module.scss"
import { TbBrandLinkedin } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'

function Hero() {
  return (
    <div className={style.hero}>
        <div className={style.hero__main}>
            <div className={style.hero__info}>
                <h1>Wasinee<br/>Siewsrichol</h1>
                <span>data scientist</span>
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
    </div>
  )
}

export default Hero