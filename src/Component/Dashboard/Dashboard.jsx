
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import DashboardDesign from './DashboardDesign';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {


// const gadgets2 = getGadget2()


                    return (
                                       <div className='container mx-auto'>
                                        <Navbar></Navbar>
                                        <DashboardDesign></DashboardDesign>
                                        <Outlet></Outlet>
                                        <Footer></Footer>
                                       </div>
                    );
};

export default Dashboard;