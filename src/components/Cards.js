import React from 'react'
import CardItem from './CardItem'
import './Card.css'
// This file contains cards compenent that wil be pass as props in CardItem.js
function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                {/* The below ul will be pass as a props in CardItem.js */}
                <ul className='cards_items'>
                    <CardItem src = 'images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services' 
                    />

                    <CardItem src = 'images/img-2.jpg'
                    text='Travel to the Islands of Bali in a private cruise'
                    label='Luxury'
                    path='/services' 
                    />
                </ul>
                <ul className='cards_items'>
                    <CardItem src = 'images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Mystery'
                    path='/services' 
                    />

                    <CardItem src = 'images/img-1.jpg'
                    text='Travel to the Islands of Bali in a private cruise'
                    label='Adventure'
                    path='/services' 
                    />

                    <CardItem
                    src='images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                </ul>
                {/*  */}
            </div>
        </div>
    </div>
  )
}

export default Cards

