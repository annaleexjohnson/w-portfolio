import React from 'react'
import SectionTitle from '../assets/SectionTitle'
import style from "../styles/contact.module.scss"

function Contact() {
  return (
    <div id="contact">
    <SectionTitle title="Contact"/>
    <div className={style.contact}>
        
        <div className={style.contact__links}>
            <div className={style.contact__ln}>
                <a href="https://www.linkedin.com/in/wasinee-siewsrichol/" target="_blank">
                    LinkedIn
                </a>
            </div>
            <div className={style.contact__email}>
                <a href="mailto:siewsrichol@gmail.com" target="_blank">
                    siewsrichol@gmail.com
                </a>
            </div>
            <div className={style.contact__gh}>
                <a href="https://github.com/WasineeSi" target="_blank">
                    GitHub
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact