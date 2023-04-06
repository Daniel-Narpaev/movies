import React from 'react'
import Content from '../content/Content'

const MainContent = ({movies}) => {
  return (
    <div>
      {movies.map((el) => {
        return(
        <Content key={el.id}
            title={el.title}
            image={el.image}
            rating={el.rating}/>
            )
      })}
    </div>
  )
}

export default MainContent