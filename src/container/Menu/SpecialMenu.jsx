import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './SpecialMenu.css';

const wineElements = data.wines.map((wine, index) => (
  <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags}/>
))
const cocktailElements = data.cocktails.map((cocktail, index) => (
  <MenuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags}/>
))

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu That Fits Your Palette'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {wineElements}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu image" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {cocktailElements}
        </div>
      </div>
    </div>  
    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
