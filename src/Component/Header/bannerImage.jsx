import React from 'react';
import Image from '..//..//assets/banner.jpg'

const BannerImage = () => {
                    return (
                                        <div className='relative mb-96 '>
                                                            <div className='lg:w-8/12 border p-3 rounded-xl  absolute -top-56 lg:left-[17%] '>
                                         <img className='w-full h-[500px] rounded-xl' src={Image} alt="" />                   
                                        </div>
                                        </div>
                    );
};

export default BannerImage;