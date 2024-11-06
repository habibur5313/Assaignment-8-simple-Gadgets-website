
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import DashboardDesign from './DashboardDesign';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {


                    useEffect(() =>{
                                        document.title="Dashboard | Gadget & Gear"
                                       },[])


                    return (
                                       <>
                                       <div className='container mx-auto min-h-[calc(100vh-203px)]'>
                                        <Navbar></Navbar>
                                        <DashboardDesign></DashboardDesign>
                                        <Outlet></Outlet>
                                       </div>
                                        <Footer></Footer>
                                       </>
                    );
};

export default Dashboard;