import React, { useEffect, useState } from 'react';
import { getGadget } from '../LocalStorage/Localstorage';
import CartDesign from './CartDesign';
import { Link } from 'react-router-dom';
import group from '..//..//assets/Group.png'

const Cart = () => {

                    const [carts,setCarts] = useState([])

                    useEffect(() => {
                                        const gadgets = getGadget()
                                        setCarts(gadgets)
                                       
                                        
                                       
                    },[])
             
                    
const handleSortPrice = () => {
                    const sorted = [...carts].sort((a,b) => b.price - a.price) 
                    setCarts(sorted)
}

const handlePurcase = () => {
  localStorage.removeItem('gadget')
  localStorage.removeItem('gadget2')
               document.getElementById('my_modal_5').showModal()
}
   
const handlePurchase = () => {

  setCarts([])
}
const calculateTotal = () => { 
                    return carts.reduce((total, item) => total + item.price, 0);
}



return (
                                        <div className='mt-10'>
                                                            <div className='flex justify-between items-center mb-10 w-10/12 mx-auto'>
                                            <h1 className='text-2xl font-medium md:text-4xl md:font-semibold lg:text-5xl lg:font-bold'>Cart</h1>
                                               <div className='flex flex-col sm:flex-row gap-4 items-center'>
                                               <h2 className='text-2xl font-medium md:text-3xl md:font-semibold lg:text-4xl lg:font-bold'>Total Cost: {calculateTotal()}$</h2>
                                               <button onClick={handleSortPrice} className='btn text-xl font-medium text-[#9538E2]'>Sort by price</button>
                                               <button onClick={handlePurcase} className='btn bg-[#9538E2] text-xl font-medium text-white'>Purcase</button>
                                                
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col items-center justify-center">
   <img className='' src={group} alt="" />
    <h3 className="font-bold text-lg">Payment Successfully</h3>
    <p className="text-xl">Thanks for purchasing.</p>
    <p className="text-xl">    Total: {calculateTotal()}$</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
       <Link to={'/'} className='btn btn-accent'><button onClick={handlePurchase}>Close</button></Link>
      </form>
    </div>
  </div>
</dialog>                                     
                                                  </div>
                                                            </div>
                                         
                                       {carts.map(cart => <CartDesign key={cart.product_id} cart={cart}></CartDesign>
                                       )}                   
                                                           
                                        </div>
                    );
};

export default Cart;