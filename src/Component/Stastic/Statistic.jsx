import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Statistic = () => {
                    return (
                                        <div>
                                       <div className='container mx-auto min-h-[calc(100vh-203px)]'>
                                        <Navbar></Navbar>
                                        <div className={`flex flex-col justify-center items-center bg-[#9538E2] pt-10 pb-60 space-y-5 rounded-xl`}>
                                        <h1 className='lg:text-6xl md:text-3xl text-2xl  w-11/12 xl:w-10/12 text-center mx-auto text-white font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                                        <p className='text-xl font-medium text-white w-11/12 md:w-10/12 mx-auto text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                        
                                        </div> 
                                        <h1 className='text-center my-10 text-4xl font-bold text-[#9538E2]'>No Data  Found</h1>
                                        <Outlet></Outlet>
                                       </div>
                                        <Footer></Footer>
                                                      
                                        </div>
                    );
};

export default Statistic;