import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import fcpgi_icon from "../../assets/fcpgi_icon.png";


function Navigation({onRouteChange}){
    


    return (

        <div className="NavContainer">
            <nav className="NavBar">
               
                    <div className= "NavList">
                        <ul>
                            <li>
                                <p><Link to="/" className="NavLink">Home</Link></p>
                            </li>
                            <li>
                                <p className="bl"><Link to="/espanol" className="NavLink">Español</Link></p>
                            </li>
                               
                            <li>
                                <p className="bl"><Link to="/about" className="NavLink">About Us</Link></p>
                            </li>
                               
                            <li>
                                <p className="bl"><Link to="/newsletter" className="NavLink">Newsletter</Link></p>
                            </li>
                            
                            <li>
                                <p className="bl"><Link to="/calendar" className="NavLink">Calendar</Link></p>
                            </li>
                              
                            <li>
                                <p className="bl"><Link to="/resources" className="NavLink">Resources</Link></p>
                            </li>
                              
                            <li>
                                <p className="bl"><Link to="/contact" className="NavLink">Contact Us</Link></p>
                            </li>

                            
                        </ul>
                </div>

                
            </nav>
           

            

            
        
        </div>

    );
}

export default Navigation; 