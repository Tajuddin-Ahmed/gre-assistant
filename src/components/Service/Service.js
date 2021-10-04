import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name,content,img} = props.service;
    return (
        <div>
            <div className="bg-white border rounded-lg p-4 shadow-2xl min-h-full">
                <div className='flex justify-center'>
                 <img className="w-1/2 " src={img} alt="" />
                </div>
                <h2 className='text-2xl font-medium'>{name}</h2>
                <p>{content}</p>
                <button className="learnBtn bg-green-400 mt-2 p-2 text-white rounded">Learn More</button>
            </div>
        </div>
    );
};

export default Service;