import React from 'react'
import style from "../styles/projectitem.module.scss"

function ProjectItem(props) {
  return (
    <>
        <a className={style.projItem} href={props.github} target="_blank">
            <div className={style.projItem__container}>
                <h1>{props.title}</h1>
                <div className={style.projItem__img} style={{backgroundImage: `url("${props.image}")`}}></div>
                <div className={style.projItem__summary}>
                    <p>{props.summary}</p>
                </div>
            </div>
        </a>
    </>
    
  )
}

export default ProjectItem