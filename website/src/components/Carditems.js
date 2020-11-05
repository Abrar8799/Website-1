import React from 'react'
import {Link} from 'react-router-dom'
 
function Carditems(props) {
    return (
        <>
        <div>
           <li className='cards__item'>
           <Link  className="cards__item__link" to={props.path}>
               <figure className="cards__item__pic-wrap" data-category={props.label}>
                   <img className="cards__item__img " src={props.src} alt="travel__image"/>
               </figure>
               <div className="cards__item__info">
                   <h1 className="cards__item__text" >{props.text}</h1>
               </div>
           </Link>
           </li>
        </div>
        </>
    )
}
export default Carditems
