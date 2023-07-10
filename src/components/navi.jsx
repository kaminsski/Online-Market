import React from 'react'
import { Link } from 'react-router-dom'
import {FaCartPlus } from "react-icons/fa"


export default function Navi(props) {
  const {pay , setPay} = props
  return (
    <div className='navi'>
      <ul>
        <li>
        
        <Link to="/">    <img src="/images/mymarket.jpg" alt="Logo" /> </Link>
            
        </li>
        </ul>
        <ul className='navMiddle'>
        <li>
            
        <Link to="/">    Home </Link>
            
        </li>
        
        <li>
            
        <Link to="/profile">    Profile </Link>
            
        </li>

        <li>
            
        <Link to="/cart">    Cart </Link>
            
        </li>
        </ul>
        <ul>
        <li>
            
        <Link to="/cart">    
                <div className="faCart">  
                    <FaCartPlus size={50}></FaCartPlus>
                    <h3>Payment: <span>{pay}</span></h3>
                </div>  
        </Link>
                
        </li>
    



       
      </ul>
      
    </div>
  )
}
