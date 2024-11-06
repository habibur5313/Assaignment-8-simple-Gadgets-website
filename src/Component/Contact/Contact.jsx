import React, { useEffect } from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import group from '..//..//assets/Group.png'
import { Link } from 'react-router-dom';

const Contact = () => {

const handleModal = () => {
                    document.getElementById('my_modal_5').showModal()
}


useEffect(() =>{
                    document.title="Contact | Gadget & Gear"
                   },[])
                    return (
                                        <div>
                                       <div className='container mx-auto min-h-[calc(100vh-203px)]'>
                                        <Navbar></Navbar>
                                        <div className={`flex flex-col justify-center items-center bg-[#9538E2] pt-10 pb-32 space-y-5 rounded-xl`}>
                                        <h1 className='lg:text-6xl md:text-3xl text-2xl  w-11/12 xl:w-10/12 text-center mx-auto text-white font-bold'>Contact Us</h1>
                                        <p className='text-xl font-medium text-white w-11/12 md:w-10/12 mx-auto text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                        
                                        </div> 
                                       <div className='md:w-[400px] px-5 mx-auto mt-10 space-y-3'>
                                       <label className="input input-bordered flex items-center gap-2">
                                        
                                        <input type="text" className="grow" placeholder="Name" />
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                      
                                        <input type="email" className="grow" placeholder="Email" />
                                        </label>
                                        <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
                                        <label className="input input-bordered bg-[#9538E2] text-2xl font-semibold flex items-center gap-2 justify-center">
                                      
                                        <input onClick={handleModal} type="submit" className=" " placeholder="Submit" />
                                        </label>

                                       </div>
                                  
                                       </div>
                                       <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col items-center justify-center">
                    <img src={group} alt="" />
    <h3 className="font-bold text-3xl">Message sent Successfully</h3>
    <p className="text-xl">We will contact you later</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to={'/'} className='btn btn-accent'><button>Close</button></Link>
      </form>
    </div>
  </div>
</dialog>
                                        <Footer></Footer>
                                                      
                                        </div>
                    );
};

export default Contact;