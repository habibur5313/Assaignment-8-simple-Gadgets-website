import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {

const [categories,setCategories] = useState([])
useEffect(() => {
                    fetch('/category.json')
                    .then(res => res.json())
                    .then(data => setCategories(data)
                    )
},[])
                    return (
                                        <div>
                                         <h1 className='text-5xl text-center font-bold'>Explore Cutting-Edge Gadgets</h1> 
                                         <div role='tablist' className='tabs tabs-lifted mb-7'>
                                        {categories.map(category => <NavLink key={category.id} role="tab" className={({isActive}) => `tab text-3xl font-thin text-red-500 ${isActive? 'tab-active': ''}`} to={`category/${category.category}`}>
                                       {category.category}                   
                                        </NavLink>)}                    
                                        </div>                  
                                        </div>
                    );
};

export default Categories;