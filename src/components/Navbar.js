import React from 'react';
import './Navbar.css';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar({ count }) {
   
    return (
        
        <div className="navbar-container">
            <FiShoppingCart size="3.5em" className="cart-icon"/>
            {/* <img alt="" src="https://image.flaticon.com/icons/png/512/833/833314.png" /> */}
            <span>{count}</span>            
        </div>
    )
}



export default Navbar;
