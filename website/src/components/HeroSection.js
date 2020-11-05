import React from 'react'
import '../App.css';
import Button   from './Button';
import './HeroSection.css';

 function HeroSection() {
    return (
        <div className='hero-container'>
           <video src="/videos/video-2.mp4" alt="content not Available"/>
           <h1>Adventures Awaits</h1> 
           <p>what are you waiting for</p> 
           <div className="hero-btn">
               <Button  ButtonStyle='btn--outline'  ButtonSize='btn--large'>  Get Started  </Button>
   <Button   ButtonStyle='btn--outline'  ButtonSize='btn--large'>  Trailer<i className='far fa-play-circle' /></Button>
           </div>
            
        </div>
    )
}
export default HeroSection
