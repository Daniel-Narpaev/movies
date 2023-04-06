import React from 'react'
import Button from '../UI/Button'
import "./Header.css"
const Header = ({users}) => {
  return (
    <div className='header'>
       <h2>Favourite Movies</h2>
       <Button text="ADD"/>
    </div>
  )
}

export default Header