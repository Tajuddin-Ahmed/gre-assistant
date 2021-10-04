import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';
import { IconName } from "react-icons/fa";
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const addressIcon = <FontAwesomeIcon icon={faMapMarkerAlt}/>
    const phoneIcon = <FontAwesomeIcon icon= {faPhone}/>
    const emailIcon = <FontAwesomeIcon icon= {faEnvelope}/>
    
    return (
        <div className="bg-headerColor opacity-90 bg-transparent text-white pt-8">
            <h2 className="text-5xl">CONTACT US</h2>
            <p>We are here for all the time to help you. if you need any help , please feel free to contact us</p>
            <div className="flex py-4">
                <div className="flex-1 divSize">
                    <h2 className="my-4 "> <span className=" mr-2 px-3 py-2 bg-white text-black rounded-full">{addressIcon}</span> Address</h2>
                    <p className="ml-40">Sylhet, Mejortila Road no-5 </p>
                    <h2 className="my-4"> <span className=" mr-2 px-3 py-2 bg-white text-black rounded-full">{phoneIcon}</span> Phone</h2>
                    <p className="ml-32"> +8801733761952 </p>
                    <h2 className="my-4"> <span className="mr-2 px-3 py-2 bg-white text-black rounded-full">{emailIcon}</span> Email</h2>
                    <p className="ml-32"> tajuddinsec1@gmail.com </p>
                </div>
                <div className="flex-1 bg-white divSize ">
                    <h2 className="text-black text-2xl">Send Message</h2>
                   <p className="ml-8 py-2 text-left"><input className="focus:outline-none focus:ring focus:border-blue-300 border-b-2" placeholder="Your Full name" type="text" /></p> 
                   <p className="py-2 ml-8 text-left"><input className="focus:outline-none focus:ring focus:border-blue-300 border-b-2 " placeholder="Your Email"  type="email" /></p>
                   <p className=" py-2 ml-8 text-left"><textarea className="focus:outline-none focus:ring focus:border-blue-300 border-b-2" placeholder="Type Your message" name="" id="" cols="30" rows="2"></textarea></p>
                   <button className="bg-green-500 p-2 rounded float-left ml-8">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;