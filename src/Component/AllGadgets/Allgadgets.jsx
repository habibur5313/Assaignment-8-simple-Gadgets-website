import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useLocation, useParams } from 'react-router-dom';
import Gadget from '../Gadgets/Gadget';



const AllGadgets = () => {

                    
                      const loader = useLoaderData()
             
                





                    return (
                      <><h1 className='text-4xl font-bold text-center mb-5 text-[#9538E2]'>Explore Cutting-Edge Gadgets</h1>
                      <div className='flex flex-col lg:flex-row'>
                     
                      <div className=' lg:w-1/4 flex flex-col gap-4 mx-10 mt-2 mb-4 lg:mb-0'>
                 <NavLink  className={'btn'} to={`/category/Smartphones`}>Smartphones</NavLink>
                  <NavLink className={'btn'} to={`/category/Laptops`}>Laptops</NavLink>
                 <NavLink className={'btn'} to={`/category/Headphones`}>Headphones</NavLink>
               <NavLink className={'btn'} to={`/category/smartWatch`}>smart watches</NavLink>
               <NavLink className={'btn'} to={`/category/chargers`}>Chargers</NavLink>
               <NavLink className={'btn'} to={`/category/powerBanks`}>Power Banks</NavLink>
               <NavLink className={'btn'} to={`/allGadget`}>All Gadgets</NavLink>
                      </div>
                                    <div className='grid lg:w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                          {loader.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)}                 
                                        </div>
                                        </div>
                                        </>
                                 
                    );
};

export default AllGadgets;