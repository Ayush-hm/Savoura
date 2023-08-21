import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>At Savoura, our journey is a testament to culinary excellence. In our vibrant history, we've woven exceptional dining moments. From artistic dishes to warm hospitality, Savoura offers immersive flavors and experiences. Join us in savoring the present and embracing the future of fine dining</p>
      </div>
      
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Founded with a culinary passion, Savoura rapidly established its presence within the dining realm. Our journey is a tale of innovation and flavors, where each dish tells a story of dedication and creativity. From our humble beginnings, we've evolved into a destination where memories harmonize, inviting you to share in our flavorful narrative</p>
      </div>        
    </div>
  </div>
);

export default AboutUs;
