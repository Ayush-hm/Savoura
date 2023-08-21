import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>592 Emerald Plaza, Lynchhaven, 66974 </p>
        <p className='p__cormorant' style={{color: '#dcca87', margin:'2rem 0'}}>
          Opening Hours
        </p>
        <p className='p__opensans'>Mon - Fri: 10:00am - 10:00pm</p>
        <p className='p__opensans'>Sat - Sun: 11:00am - 11:00pm</p>
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
