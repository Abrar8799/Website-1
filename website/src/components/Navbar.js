import React , { useState ,useEffect}  from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Button  from './Button'

const Navbar =()=> {

    const [click,setclick]=useState(false);
    const [button ,setbutton]=useState(true)

    const handleclick=()=> {setclick(!click);}

    const closemobileMenu=()=>{
        setclick(false )
    }

    const showbutton =()=> {
        if(window.innerWidth<= 960){
            setbutton(false)
        }
        else{
            setbutton(true);
        }
    }; 
    useEffect(()=>{
        showbutton();
    },[]);

    window.addEventListener('resize',showbutton) 
   
return( <>
<nav className="navbar">
    <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closemobileMenu}>
         H&F.com<i className="fas fa-tshirt"/>
         <br></br>
         </Link>
        
        <div className="menu-icon" onClick={handleclick}>
            <i className= { click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>

        <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
                <Link to='home/' 
                className='nav-links'
                 onClick={closemobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/products'
                 className='nav-links'
                  onClick={closemobileMenu}>Products</Link>
            </li>
            <li className='nav-item'>
                <Link to='/services'
                 className='nav-links' 
                 onClick={closemobileMenu}>Services</Link>
            </li>
            
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links' onClick={ closemobileMenu }>
           
            
            {button && <Button ButtonStyle='btn--outline'> SignUp </Button>}
            </Link>
            </li>
            </ul>
        </div>
</nav>
</> 
 )
}
export default  Navbar