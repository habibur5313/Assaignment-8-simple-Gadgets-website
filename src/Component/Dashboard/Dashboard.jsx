import React, { useEffect } from 'react';
import { getGadget, getGadget2 } from '../LocalStorage/Localstorage';
import Gadget from '../Gadgets/Gadget';
import Navbar from '../Header/Navbar';
import Banner from '../Header/Banner';

const Dashboard = () => {

const gadgets = getGadget()
const gadgets2 = getGadget2()


                    return (
                                       <div className='container mx-auto'>
                                        <Navbar gadgets={gadgets} gadgets2={gadgets2}></Navbar>
                                        <Banner></Banner>
                                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                       {gadgets.map(gadget => <Gadget gadget={gadget}></Gadget>
                                       )}                   
                                        </div>
                                       </div>
                    );
};

export default Dashboard;