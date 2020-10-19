import React from 'react';

const Image = (props) => {
  const { 
    alt, 
    image, 
  } = props

  return (
    <div className='image-container'>
      <img src={image} alt={alt} />
    </div>
  )
}

export default Image;