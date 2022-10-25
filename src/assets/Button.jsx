import React from 'react'

function Button(props) {

    const BtnContainer={
        display: "flex",
        justifyContent: "center",
        maxWidth: "100%",
        margin: "5vh"
    }
     const BtnStyle = {
            width: "15rem",
            height: "4rem",
            color: "white",
            backgroundColor: "#606C38",
            fontSize: "0.8rem",
            padding: "0.5rem",
            border: "none",
            outline: "none",
            borderRadius: "2rem"
     }

     const BtnHover = {
            width: "15rem",
            height: "4rem",
            color: "white",
            backgroundColor: "#BC6C25",
            fontSize: "0.8rem",
            padding: "0.5rem",
            border: "none",
            outline: "none",
            borderRadius: "2rem"
     }

    function onHover(e){
        e.preventDefault();
        e.target.style.color = "#DDA15E" 
    }

    function onLeave(e){
        e.preventDefault();
        e.target.style.color = "white"
    }


  return (
    <div style={BtnContainer}onMouseOver={onHover} onMouseOut={onLeave}>
        <a href={props.linkto} target="_blank">
            <button style={BtnStyle} ><h1>{props.text}</h1></button>
        </a>
    </div>
  )
}

export default Button