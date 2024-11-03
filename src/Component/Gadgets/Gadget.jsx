import React from 'react';
import { NavLink } from 'react-router-dom';

const Gadget = ({gadget}) => {

const {product_image,product_title,price,product_id,category} = gadget

                    return (
                                        <div >
                                        <div className="card  border shadow-xl">
                                        <figure>
                                        <img
                                        className='h-[250px] '
                                        src={product_image}
                                        alt={category} />
                                        </figure>
                                        <div className="card-body">
                                        <h2 className="text-2xl font-semibold">{product_title}</h2>
                                        <p className='text-xl font-medium text-gray-600'>Price: {price} $</p>
                                        <NavLink to={`/gadget-details/${product_id}`}><button className={'text-xl font-medium border border-[#9538E2] text-[#9538E2] py-1 px-3 rounded-xl'}>View Details</button></NavLink>
                                        </div> 
                                        </div>                
                                         </div>
                    );
};

export default Gadget;