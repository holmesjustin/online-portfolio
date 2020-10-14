import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            
            {/* TOP FEATURED ROW */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Check out the animations I have worked on in the past'
              label='Animation'
              path='/portfolio'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Look at some of the graphic design work I have done for the Duke University Football Program'
              label='Graphic Design'
              path='/portfolio'
            />
          </ul>

            {/* Second row */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Check out the animations I have worked on in the past'
              label='Animation'
              path='/portfolio'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Look at some of the graphic design work I have done for the Duke University Football Program'
              label='Graphic Design'
              path='/portfolio'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Look at some of the graphic design work I have done for the Duke University Football Program'
              label='Graphic Design'
              path='/portfolio'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;