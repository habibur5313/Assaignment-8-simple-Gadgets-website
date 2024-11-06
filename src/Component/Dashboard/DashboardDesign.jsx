import React from 'react';
import {  NavLink } from 'react-router-dom';

const DashboardDesign = () => {
                  
                    return (
                                        <div>
                                       <div className={`flex flex-col justify-center items-center rounded-xl bg-[#9538E2] pt-10 pb-32 space-y-5 `}>
                                        <h1 className='lg:text-6xl md:text-3xl text-2xl  w-11/12 xl:w-10/12 text-center mx-auto text-white font-bold'>Dashboard</h1>
                                        <p className='text-xl font-medium text-white w-11/12 md:w-10/12 mx-auto text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                      <div className='flex gap-5 '>
                                      <NavLink className={'btn text-xl font-medium'} to={'/dashboard/cart'}>Cart</NavLink>
                                      <NavLink className={'btn text-xl font-medium'} to={'/dashboard/wishlist'}>Wishlist</NavLink>
                                      </div>
                                        </div>                     
                                        </div>
                    );
};

export default DashboardDesign;