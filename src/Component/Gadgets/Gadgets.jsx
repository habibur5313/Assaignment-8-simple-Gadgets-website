import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from './Gadget';

const Gadgets = () => {


                    const {category} = useParams()
                    const loader = useLoaderData()
                    const [gadgets,setGadgets] = useState([])


useEffect(() => {
                    if(category){
                    const filterd = loader.filter(categori => categori.category === category)
                    setGadgets(filterd)
                    }
                    else{
                    setGadgets(loader)
                    }
},[loader,category])


                    return (
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                          {gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)}                 
                                        </div>
                    );
};

export default Gadgets;