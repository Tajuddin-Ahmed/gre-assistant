import { faHome, faSign, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import greIcon from '../../images/greIcon.jpg';
import './Header.css';


const Header = () => {
    const homeIcon = <FontAwesomeIcon icon={faHome}/>
    const signIn = <FontAwesomeIcon icon={faSignInAlt}/>
    const signUp = <FontAwesomeIcon icon={faSignOutAlt}/>
    return (
        <nav className="bg-headerColor text-white p-3 text-2xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <img className="rounded-full" width="50px" height="50px" src={greIcon} alt="" />                
                <h2 className="customFont">GRE ASSISTANT</h2>
                </div>
                <div>
                    <input placeholder="Search Here" className="focus:outline-none focus:ring focus:border-blue-300 rounded-full" type="text" />
                </div>
               <div className="text-1xl">
                   <button> {signIn}Sign In</button>
                   <button className="ml-4">{signUp}Sign Up</button>
               </div>
            </div>
            <div className="pt-4">
                <NavLink className="mr-16" to="/home">{homeIcon} Home</NavLink>
                <NavLink className="mr-16" to="/services">Services</NavLink>
                <NavLink className="mr-16" to="/about">About Us</NavLink>
                <NavLink className="mr-16" to="/contact">Contact Us</NavLink>
            </div>
            
        </nav>
    );
};

export default Header;