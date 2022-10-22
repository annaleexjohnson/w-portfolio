import React from 'react'
import style from "../styles/sectiontitle.module.scss"

function SectionTitle(props) {
  return (
    <div className={style.sectionTitle}>
        <div className={style.section1}>
            <h1>{props.title}</h1>
            <div className={style.divider1}></div>
        </div>
        <div div className={style.divider2}></div>
        <div div className={style.divider3}></div>
    </div>
  )
}

export default SectionTitle