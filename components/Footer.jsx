import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Broken String LTD All rights reserved</p>
      <p> Crafted and Designed by: <a href="https://github.com/MichalKaso" className='mike'>Michal Kaso</a></p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer