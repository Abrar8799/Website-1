import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLE = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium','btn--large'];

const Button =({

    children,
    type,
    onClick,
    ButtonStyle,
    ButtonSize

})=> {

    const checkbuttonStyle =STYLE.includes(ButtonStyle) ? ButtonStyle:STYLE[0];

    const checkButtonSize=SIZES.includes(ButtonSize)? ButtonSize :SIZES[0];

    return(

        <Link to='/Sign-up' className='btn-mobile'>

            <button 
            className={`btn ${ checkbuttonStyle} ${checkButtonSize}`} onClick={onClick}type={type}> {children}
                  </button>
            
            </Link>
    )

}

export default Button