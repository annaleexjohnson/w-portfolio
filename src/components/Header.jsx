import React from 'react'
import style from "../styles/header.module.scss"

function Header() {
  return (
    <div className={style.header}>
        <div className={style.nav}>
            <ul className={style.nav__links}>
                {/* Hamburger Menu */}
                <input type="checkbox" id="checkbox-toggle"/>
                <label for="checkbox-toggle" className={style.nav__ham}>&#9776;</label>
                {/* Navigation */}
                <div className={style.nav__menu}>
                    <li className={style.nav__item}>
                        <a href="#hero">home</a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#about">about</a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#projects">projects</a>
                    </li>
                    <li className={style.nav__item}>
                        <a href="#contact">contact</a>
                    </li> 
                </div>
                
            </ul>
        </div>
    </div>
  )
}

export default Header
