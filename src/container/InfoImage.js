import React from 'react';
import Info from '../components/Info';
import keyboard from '../assets/images/keyboard.jpg';
import Image from '../components/Image';

const InfoImage = () => {
  return(
    <div className="infoImage-container">
      <Info/>
      <Image image={keyboard} alt={"keyboard"}/>
    </div>
  );
}

export default InfoImage;