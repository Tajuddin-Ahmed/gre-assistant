import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=" notfound border-8 border-pink-600 bg-gray-800">
            <div className="mt-20">
                <div className=" text-white">
                    <h2 className="text-7xl font-extrabold">ERROR 404 <br />NOT FOUND</h2>
                    <p>You may have mis-typed the URL. <br /> Or the page has been removed.
                    <br /> Actually, there is nothing to see here...<br />
                        Click on the links below to do something, Thanks!</p>
                </div> 
            </div>           
        </div>
    );
};

export default NotFound;