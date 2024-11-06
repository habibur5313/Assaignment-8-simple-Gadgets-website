import { Link, useLocation } from "react-router-dom";


const Footer = ({id}) => {

const {pathname} = useLocation()


                    return (
                                        <div className={`navbar py-10 px-5 bg-neutral text-white text-xl font-medium ${pathname === `/gadget-details/${id}`? 'md:mt-[500px] mt-[620px]': 'mt-10'} `}>
                                         
                                      <div className="container mx-auto flex flex-col lg:flex-row">
                                        <div className="lg:w-1/3   mb-5">
                                       <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                                       <p className=" font-semibold">Leading the way in cutting-edge technology and innovation.</p>
                                        </div>
                                        <div className="lg:w-2/3  flex flex-col md:flex-row gap-5 justify-between">
                                           <div className="flex flex-col justify-center items-center">
                                            <h4 className="text-2xl font-semibold text-[#9538E2]">Service</h4>
                                            <div className="flex flex-col text-center"><Link>Product Support</Link>
                                            <Link to={'/orderTracking'}>Order Tracking</Link>
                                            <Link to={'/shipping'}>Shipping & Delivery</Link>
                                            <Link to={'/returns'}>Returns</Link></div>
                                       </div>
                                       <div className="flex flex-col  justify-center items-center"> 
                                      <h4 className="text-2xl font-semibold text-[#9538E2]">Service</h4>
                                            <div className="flex flex-col text-center">
                                              <Link to={'/aboutUs'}>About Us</Link>
                                            <Link to={'/careers'}>Careers</Link>
                                            <Link to={'/contact'}>Contact </Link>
                                       </div>
                                       </div>
                                       <div className="flex flex-col  justify-center items-center">
                                            <h4 className="text-2xl font-semibold text-[#9538E2]">Service</h4>
                                            <div className="flex flex-col text-center">
                                              <Link to={'/termsOfService'}>Terms of Service</Link>
                                             <Link to={'/privacyPolicy'}>Privacy Policy</Link>
                                                 <Link to={'/cookiePolicy'}>Cookie Policy</Link>
                                           </div>
                                      
                                        </div>

                                      </div>

                                        </div>
                                        </div>
                    );
};

export default Footer;