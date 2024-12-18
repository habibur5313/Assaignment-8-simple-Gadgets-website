import React, { useEffect, useState } from 'react';
import { getGadget2 } from '../LocalStorage/Localstorage';
import Gadget from '../Gadgets/Gadget';
import CartDesign from '../addToCart/CartDesign';

const Wishlist = () => {

const [wishlists,setWishlists] = useState([])

useEffect(() => {
                    const wishlist = getGadget2()
                    setWishlists(wishlist)
},[])

const handleDelete = (id) => {
   const filterd = wishlists.filter(wishlist => wishlist.product_id !== id)
   setWishlists(filterd);

   
   
 } 

const handleSortPrice = () => {
                    const sorted = [...wishlists].sort((a,b) => b.price - a.price  ) 
                    setWishlists(sorted)
}

const handlePurcase = () => {
                    localStorage.removeItem('gadget2')
                    setWishlists([])
}

const calculateTotal = () => { 
                    return wishlists.reduce((total, item) => total + item.price, 0);
}
                    return (
                                        <div className='mt-10'>
                                                             <div className='flex justify-between items-center mb-10 w-10/12 mx-auto'>
                                            <h1 className='text-2xl font-medium md:text-4xl md:font-semibold lg:text-5xl lg:font-bold'>Wishlist</h1>
                                               <div className='flex gap-4 items-center'>
                                               <h2 className='text-2xl font-medium md:text-3xl md:font-semibold lg:text-4xl lg:font-bold'>Total Cost: {calculateTotal()}$</h2>
                                               <button onClick={handleSortPrice} className='btn text-xl font-medium text-[#9538E2]'>Sort by price</button>
                                               <button onClick={handlePurcase} className='btn bg-[#9538E2] text-xl font-medium text-white'>Purcase</button>
                                                                                     
                                                  </div>
                                                  </div>
                                         
                                       {wishlists.map(wishlist => <CartDesign handleDelete={handleDelete} key={wishlist.product_id} cart={wishlist}></CartDesign>
                                       )}                   
                                                         
                                        </div>
                    );
};

export default Wishlist;