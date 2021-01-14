import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';

function Cards() {
  return (
    <div className='cards'>
      <h2>Popular Topics</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Buyer order management'
              path='/BoM'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Invoice'
              path='/Invoice' 
            />
            <CardItem
              src='images/img-12.jpg'
              text='Payment'
            />
          </ul>
        </div>
      </div>
      <h3>Recomanded for you</h3>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem2
              text='Buyer FAQs'
            />
            <CardItem2
              text='Account and profile settings'
            />
             <CardItem2
              text='Paying for an Order, an Extra, or a Custom Offer'
            />
        </ul>
        </div>
    </div>
  );
}

export default Cards;