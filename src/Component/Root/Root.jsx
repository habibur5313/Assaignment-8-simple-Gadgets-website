import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
// import { Toaster } from 'react-hot-toast';


const Root = () => {
                    return (
                                        <>
                                        {/* <Toaster/> */}
                                        
                                        <div className='container mx-auto'>
                                       <Home></Home>
                                        <Outlet/>
                                        </div>
                                        <Footer></Footer>
                                        </>              
                                        
                    );
};

export default Root;