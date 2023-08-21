import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
        <h1 className='app__header-h1'> Crafting Flavors, Creating Memories</h1>
        <p className='p__opensans' style={{ margin: '1.5rem 0' }}>
          Step into Savoura, where culinary mastery intertwines with impeccable service. Our esteemed chefs meticulously craft dishes, elevating each ingredient into an extraordinary experience. With every visit, you unlock a treasury of gastronomy, forging lasting impressions through our impeccable flavors and refined ambiance. Discover the epitome of fine dining, where excellence in cuisine and hospitality converge, creating timeless memories for you to relish.
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
    


    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
