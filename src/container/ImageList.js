import React from 'react';
import Image from '../components/Image';

const ImageList = (props) => {
  const { list } = props;

  const renderList = () => list.map((item) => {
    return <Image image={item.image} alt={item.name}/>
  })

  return (
    <div className="image-row-container">
      {renderList()}
    </div>
  )
} 

export default ImageList;