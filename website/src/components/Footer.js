import React from 'react'
import Button from './Button'
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                 About Us:
                </p>
                <p className="footer-subscription-text">
                  Sign-up
                </p>
                <div className="input-area">
                    <form>
<input 
                    type="email"
                    name="email"
                    placeholder="your email"
                    className="footer-input"/>

<input 
                    type="password"
                    name="Password"
                    placeholder="Password"
                    className="footer-input"/>                   
                     <Button className="button" type="button" ButtonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
        </section>
        
        <div className="footer-links">
            <div className="footer-links-wrapper">
                {/* First-Link-block */}
                <div className="footer-links-min">
<h2>About us</h2>
<Link to='/signup'>How its work</Link>
<Link to='/'>Testomaonia</Link>
<Link to='/'>Read</Link>
<Link to='/'>learn</Link>
<Link to='/'>Career</Link>

                </div>
              {/* Second-Block-link */}
              <div className="footer-links-min">
<h2>Contact us</h2>
<Link to='/signup'>How its work</Link>
<Link to='/'>Testomaonia</Link>
<Link to='/'>Read</Link>
<Link to='/'>learn</Link>
<Link to='/'>Career</Link>
                </div>
                {/* Third-block-link */}
                <div className="footer-links-min">
<h2>Videos</h2>
<Link to='/signup'>How its work</Link>
<Link to='/'>Testomaonia</Link>
<Link to='/'>Read</Link>
<Link to='/'>learn</Link>
<Link to='/'>Career</Link>
                </div>
                <div className="footer-links-min">
<h2>Social Media</h2>
<Link to='/signup'>How its work</Link>
<Link to='/'>Testomaonia</Link>
<Link to='/'>Read</Link>
<Link to='/'>learn</Link>
<Link to='/'>Career</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Footer
