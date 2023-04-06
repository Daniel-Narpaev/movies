import React from 'react'
import Button from '../UI/Button'
import "./Content.css"
const Content = ({title, image, rating}) => {
  return (
    <div className='content'>
        <img className='img' src={image} alt="photo" />
        <div className='block'>
            <p className='title'>{title}</p>
            <div className='btnBlock'>
                <span className='rating'>{rating}/5 stars</span>
                <Button text="EDIT"/>
                <Button text="Delete"/>
            </div>
        </div>
    </div>
  )
}

export default Content