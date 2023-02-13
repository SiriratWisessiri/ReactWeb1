import React from 'react'
import CardItem from './CardItem'
import './Card.css'
import image9 from '../images/img-9.jpg'
import image2 from '../images/img-2.jpg'
import image8 from '../images/img-8.jpg'
import image1 from '../images/img-1.jpg'
import image4 from '../images/img-4.jpg'
// This file contains cards compenent that wil be pass as props in CardItem.js
function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                {/* The below ul will be pass as a props in CardItem.js */}
                <ul className='cards_items'>
                    <CardItem src = {image9}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services' 
                    />

                    <CardItem src = {image2}
                    text='Travel to the Islands of Bali in a private cruise'
                    label='Luxury'
                    path='/services' 
                    />
                </ul>
                <ul className='cards_items'>
                    <CardItem src = {image8}
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Mystery'
                    path='/services' 
                    />

                    <CardItem src = {image1}
                    text='Travel to the Islands of Bali in a private cruise'
                    label='Adventure'
                    path='/services' 
                    />

                    <CardItem
                    src={image4}
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

