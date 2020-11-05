import React from 'react'
import Carditems from './Carditems'
import './Card.css';

 function Card() { 
    return (
        <>
        <div className="cards">
            <h1>check out the value please</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <ul className="cards__items">
                            
<Carditems
 src="images/img-5.jpg"
  text="Explore the hidden Amazon forest" 
  label="add1"
   path= "/products" />

<Carditems
 src="images/img-7.jpg"
  text="Explore the hidden Amazon forest" 
  label="add1"
   path= "/products" />

<Carditems
 src="images/img-8.jpg"
  text="Explore the hidden Amazon forest" 
  label="add1"
   path= "/products" />
 </ul>

 <ul className="cards__items">
                            
                            <Carditems
                             src="images/img-1.jpg"
                              text="Explore the hidden Amazon forest" 
                              label="add1"
                               path= "/products" />

<Carditems
                             src="images/img-2.jpg"
                              text="Explore the hidden Amazon forest" 
                              label="add1"
                               path= "/products" />

<Carditems
                             src="images/img-3.jpg"
                              text="Explore the hidden Amazon forest" 
                              label="add1"
                               path= "/products" />



                               </ul>
                    </div>
                </div>
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <ul className="cards__items">
                            
<Carditems
 src="images/img-5.jpg"
  text="Explore the hidden Amazon forest" 
  label="add1"
   path= "/products" />

<Carditems
 src="images/img-7.jpg"
  text="Explore the hidden Amazon forest" 
  label="add1"
   path= "/products" />

<Carditems
 src="images/img-8.jpg"
  text="Explore the hidden Amazon forest" 
  label="add1"
   path= "/products" />
 </ul>
 </div>
 </div>
                </div>
        </div>
        </>
    )
}
export default Card
