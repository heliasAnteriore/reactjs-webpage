import React from 'react';
import InfoImage from '../container/InfoImage';
import {imageList} from '../helpers/imageDirectory'; 
import ImageList from '../container/ImageList';

const Home = () => {
  return (
    <div>
      <InfoImage/>
      <ImageList list={imageList}/>
    </div>
  )
}

export default Home;