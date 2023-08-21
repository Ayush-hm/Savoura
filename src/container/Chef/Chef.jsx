import React from 'react';
import {images} from '../../constants';
import './Chef.css';
import {SubHeading} from '../../components';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>Our Core Values</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>As the Head Chef and CEO of Savoura, we believe in crafting culinary marvels that stir emotions and transcend palates. </p>
        </div>
        <p className='p__opensans'>Our passion drives us to meticulously source the finest ingredients and infuse them with creativity. We're devoted to creating a dining haven where each plate tells a story of dedication and innovation. Our shared vision is to curate an unforgettable experience that lingers on the taste buds and in the heart, inviting you to join us on this remarkable gastronomic journey</p>
      </div>
      <div className='app__chef-sign'>
          <p>David Smith</p>
          <p className='p__opensans'> Head Chef</p>
          <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
