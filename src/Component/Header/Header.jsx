import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import BannerImage from './bannerImage';


const Header = () => {
                    return (
                                        <div>
                                        <Navbar></Navbar> 
                                         <Banner></Banner> 
                                         <BannerImage></BannerImage>                 
                                        </div>
                    );
};

export default Header;