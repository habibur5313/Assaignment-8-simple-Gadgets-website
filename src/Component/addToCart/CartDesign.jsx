import React from 'react';

const CartDesign = ({cart,handleDelete}) => {

const {product_title,product_image,price,description,product_id} = cart
console.log(cart);

                    return (
                                        <div className='border rounded-xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-8 mb-5'>
                                        <div className=''>
                                        <img className='h-[150px]' src={product_image} alt="" />                    
                                        </div>  
                                        <div className='space-y-4'>
                                        <div className='flex justify-between items-center'>
                                        <h1 className='text-2xl font-bold'>{product_title}</h1> 
                                        <button onClick={() => handleDelete(product_id)} className='mr-2 text-2xl font-medium text-[#9538E2]'><i className="fa-solid fa-xmark"></i></button>
                                        </div>
                                        <p className='text-xl font-medium text-gray-600'>{description}</p> 
                                        <h4 className='text-2xl font-medium'>Price: $ {price}</h4>                  
                                        </div>                  
                                        </div>
                    );
};

export default CartDesign;