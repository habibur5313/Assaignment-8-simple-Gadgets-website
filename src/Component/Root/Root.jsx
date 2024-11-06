import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
// import { Toaster } from 'react-hot-toast';


const Root = () => {


                    useEffect(() =>{
                                        document.title="Home | Gadget & Gear"
                                       },[])
                    return (
                                        <>
                                        {/* <Toaster/> */}
                                        
                                        <div className='container mx-auto min-h-[calc(100vh-232px)]'>
                                       <Home></Home>
                                        <Outlet/>
                                        </div>
                                        <Footer></Footer>
                                        </>              
                                        
                    );
};

export default Root;