import React from 'react';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Root = () => {
                    return (
                                        <>
                                        <div className='container mx-auto'>
                                       <Home></Home>
                                        <Outlet/>
                                        </div>
                                        <Footer></Footer>
                                        </>              
                                        
                    );
};

export default Root;