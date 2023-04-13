import React from 'react'
import Button from '../UI/Button'
import "./Content.css"
const Content = ({title, image, rating, deleteHandler, id}) => {
  return (
    <div className='content'>
      <img  src={image} alt="jijgb" className='picture'/>
        <div className='block'>
            <p className='title'>{title}</p>
            <div className='btnBlock'>
                <span className='rating'>{rating}/5 stars</span>
                <Button text="EDIT"/>
                <Button text="Delete" onClick={()=>deleteHandler(id)}/>
            </div>
        </div>
    </div>
  )
}

export default Content