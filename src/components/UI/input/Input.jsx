import React from 'react'
import "./Input.css"
const Input = ({ label, onChange, value, type }) => {
  return (
    <div className='form'>
        <label>{label}</label>
        <input type={type}  onChange={onChange} value={value} className='inp' />
    </div>
  )
}

export default Input