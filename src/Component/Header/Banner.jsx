import React from 'react';
import { useLocation } from 'react-router-dom';

const Banner = () => {
                    const {pathname} = useLocation()
                    return (
                                        <div>
                                       <div className={`flex flex-col justify-center items-center ${pathname === '/'?'rounded-bl-xl rounded-br-xl': 'rounded-xl'} bg-[#9538E2] pt-10 pb-60 space-y-5 `}>
                                        <h1 className='lg:text-6xl md:text-3xl text-2xl  w-11/12 xl:w-10/12 text-center mx-auto text-white font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                                        <p className='text-xl font-medium text-white w-11/12 md:w-10/12 mx-auto text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                        <button className='btn'>Shop now</button>
                                        </div>                     
                                        </div>
                    );
};

export default Banner;