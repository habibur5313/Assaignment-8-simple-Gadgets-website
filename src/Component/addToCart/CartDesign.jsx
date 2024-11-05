import React from 'react';

const CartDesign = ({cart}) => {

const {product_title,product_image,price,description} = cart
                    return (
                                        <div className='border rounded-xl flex flex-col sm:flex-row items-center gap-8 mb-5'>
                                        <div className=''>
                                        <img className='h-[150px]' src={product_image} alt="" />                    
                                        </div>  
                                        <div className='space-y-4'>
                                        <h1 className='text-2xl font-bold'>{product_title}</h1> 
                                        <p className='text-xl font-medium text-gray-600'>{description}</p> 
                                        <h4 className='text-2xl font-medium'>Price: $ {price}</h4>                  
                                        </div>                  
                                        </div>
                    );
};

export default CartDesign;