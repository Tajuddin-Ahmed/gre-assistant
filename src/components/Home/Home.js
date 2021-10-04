import React, { useEffect, useState } from 'react';
import img from '../../images/GRE-Study-Material.png';
import './Home.css';
import HomeData from '../HomeData/HomeData';

const Home = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./greContent.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    const serves = services.filter(service =>service.id<5)
    return (
        <div className="">
            <div className="homebgColor opacity-80 bg-transparent flex">
                    <div className="text-white flex-1 justify-center items-center">
                        <h1 className="text-5xl mt-28">We're the Shortest Distance Between You and an Acceptance Letter</h1>
                    </div>
                    <div className="flex-1">
                            <img className="my-5 pr-8 rounded" src={img} alt="" />
                    </div>
            </div>
            <section className='bg-green-50 py-4'>
                    <h2 className="text-4xl font-bold text-uppercase">OUR SERVICES</h2>
                    <hr className="mx-96 border" />
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        {/* <div className="bg-white border rounded-lg w-1/2 ml-64 p-4 shadow-2xl ">
                            <img className="w-1/2 ml-20 rounded-lg" src={greMath} alt="" />
                            <h2 className="font-bold">Gre Math</h2>
                            <p>Even if you aren’t a math genius, better GRE scores and the best graduate schools are within your grasp!</p>
                           
                        </div> */}
                        {
                            serves.map(serve =><HomeData serve={serve} key={serve.id}></HomeData>)
                        }
                       
                    </div>
            </section>

        </div>
    );
};

export default Home;