import { NavLink, useLocation } from "react-router-dom";
import { getGadget, getGadget2 } from "../LocalStorage/Localstorage";
import { useEffect, useState } from "react";


const Navbar = () => {

const {pathname} = useLocation()





const links = 
                  
                    <>
                    <li className="text-xl font-medium "><NavLink to={'/'}>Home</NavLink></li>
                    <li className="text-xl font-medium "><NavLink to={'/stastic'}>Listed Books</NavLink></li>
                    <li className="text-xl font-medium "><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                   
                    </>

const [carts,setCarts] = useState([])
const [wishLists,setWishlists] = useState([])

useEffect(() => {
                    const gadgets = getGadget()
                    setCarts(gadgets)
},[])
useEffect(() => {
                    const gadgets2 = getGadget2()
                    setWishlists(gadgets2)
},[])

                   

                    return (
                                        <div className={`navbar ${pathname === '/'? 'bg-[#9538E2]': ''} mt-4 rounded-tl-xl rounded-tr-xl`}>
                                        <div className="navbar-start">
                                        <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                        </svg>
                                        </div>
                                        <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        {links}
                                        </ul>
                                        </div>
                                        <a className="btn btn-ghost text-3xl">Gadget & Gear 

                                        </a>
                                        </div>
                                        <div className="navbar-center hidden lg:flex">
                                        <ul className="menu menu-horizontal px-1">
                                        {links}
                                        </ul>
                                        </div>
                                        <div className="navbar-end">
                                        <div className='flex gap-5'>
                                        <button className=' text-xl font-medium relative'><i className="fa-solid fa-cart-plus"></i><span className="absolute -top-1 left-4 bg-black rounded-full text-white px-2 py-1 text-xs">{carts.length}</span></button>
                                        <button className='text-xl font-medium px-3 py-1 border rounded-full relative'><i className="fa-regular fa-heart"></i><span className="absolute -top-1 left-7 text-white text-xs px-2 py-1 bg-black rounded-full">{wishLists.length}</span></button>
                                       
                                      </div>
                                        </div>
                                        </div>
                                                            );
                                        };

 export default Navbar;