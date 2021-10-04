import React from 'react';

const HomeData = (props) => {
    const {name,img,content} = props.serve;
    return (
        <div className="border shadow-2xl rounded-lg mx-8 p-4 ">
            <div className="flex justify-center">
             <img className="w-1/2 rounded" src={img} alt="" />
            </div>
            <div className='w-1/2 ml-36 text-center'>
                <div className="flex-1">
                <h2 className="text-2xl font-medium">{name}</h2>
                <p className="text-justify">{content}</p>
                <button className="mt-20 bg-green-500 my-2 p-2 rounded-lg text-white">Know More</button>
                </div>
            </div>
            
        </div>
    );
};

export default HomeData;