import React from 'react'
import "./Button.css"
const Button = ({text}) => {
    const className = ()=> {
       if (text === "ADD") {
         return "Addbtn"
       } else if (text === "EDIT") {
        return "Editbtn"
       }else{
        return "Deletebtn"
       }
    }
  return (
    <button className={className()}>{text}</button>
  )
}

export default Button