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
                    <li>
                        <a>home</a>
                    </li>
                    <li>
                        <a>about</a>
                    </li>
                    <li>
                        <a>projects</a>
                    </li>
                    <li>
                        <a>contact</a>
                    </li> 
                </div>
                
            </ul>
        </div>
    </div>
  )
}

export default Header
