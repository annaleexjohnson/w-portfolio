import React from 'react'
import style from "../styles/featuredprojects.module.scss"

function FeaturedProject(props) {

    const imgUrl = props.image
    console.log(imgUrl)

  return (
    <div className={style.featured}>
        <h1>{props.title}</h1>
        <div className={style.tools}><span style={{fontWeight: "bold"}}>Tools: </span> {props.tools}</div>
        <div className={style.description}>
            <div className={style.image} style={{backgroundImage: `url("${props.image}")`}} ></div>
            <div className={style.info}>
              <div className={style.summary}>
                  <h3>Summary</h3>
                  {props.summary}
              </div>
              <div className={style.readmore}>
                  <h5>Read More:</h5>
                  <a href={props.github}><p>{props.github}</p></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProject