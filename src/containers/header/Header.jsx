import React from 'react'
import './header.css'

import header_photo from '../../assets/header_photo.jpg';

const Header = () => {
  return (
    <div className='__header section__padding' id='home'>
      <div className='__header_content'>
        <h1 className='gradient__text'>Are you looking for a top-tier electrical services company in South Island? </h1>
        <p>We are committed to delivering a wide range of electrical services in both residential and commercial buildings. Our expertise and skills ensure that our clients enjoy the benefits</p>
       
      </div>

      <div className='__header_image img '>
          <img src={header_photo} alt='Image' />
      </div>
    </div>
  );
};
export default Header