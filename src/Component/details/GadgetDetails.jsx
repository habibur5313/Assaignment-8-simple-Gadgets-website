import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsDesign from './DetailsDesign';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const GadgetDetails = () => {

const data = useLoaderData()
const {id} = useParams()
const idNum = parseInt(id)

const [details, setDetails] = useState([])


useEffect(() => {
                  
                    const filterd = data.find(dta => dta.product_id === idNum)
                    setDetails(filterd);
                   
                    
},[data,idNum])

const {product_title,product_image,category,price,description,availability,rating,specification} = details

const specificaTion = details.specification

if(!Array.isArray(specificaTion)){
  console.error('details is not array',specificaTion);
  return null
  
}
console.log(specificaTion);





                    return (
                                        <div className='container mx-auto'>
                                       <div className='relative'>
                                          <Navbar></Navbar>
                                        <DetailsDesign></DetailsDesign>
                                        <div className='lg:w-10/12  border p-3 rounded-xl  absolute top-80 lg:left-[8%] '>
                                        <div className='w-full h-[500px] bg-white rounded-xl flex ' >
                                      <img className='h-[100%] rounded-xl' src={product_image} alt="" /> 
                                      <div>
                                        <h1>{product_title}</h1>
                                        <h3>{price}</h3>
                                        <button className='btn text-green-400'>stock</button>
                                        <p>{description}</p>
                                        <p>Specification</p>
                                        <ol style={{ listStyleType: "number" }}>
                                      {specificaTion.map((spec,idx) => <li key={idx}>{spec}</li>)}
                                      </ol>
                                      <h4>Rating</h4>
                                      <p>{rating}</p>
                                      <div className='flex gap-5'>
                                        <button className='btn bg-[#9538E2] text-xl font-medium text-white'>Add to Chart<i class="fa-solid fa-cart-plus "></i></button>
                                        <button className='text-xl font-medium px-3 py-1 border rounded-full'><i class="fa-regular fa-heart"></i></button>
                                      </div>
                                        </div>                     
                                        </div> 

                                        </div>
                                        <Footer></Footer>
                                      </div>
                                      </div>
                    );
};

export default GadgetDetails;