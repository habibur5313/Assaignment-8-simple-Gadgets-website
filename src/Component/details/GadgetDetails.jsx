import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsDesign from './DetailsDesign';

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

console.log(specification);

                    return (
                                        <div className='container mx-auto'>
                                       <div className='relative'>
                                        <DetailsDesign></DetailsDesign>
                                        <div className='lg:w-10/12  border p-3 rounded-xl  absolute top-72 lg:left-[8%] '>
                                        <div className='w-full h-[500px] bg-white rounded-xl flex'>
                                      <img className='h-[100%]' src={product_image} alt="" /> 
                                      <div>
                                        <h1>{product_title}</h1>
                                        <h3>{price}</h3>
                                        <button className='btn text-green-400'>stock</button>
                                        <p>{description}</p>
                                        <p>Specification</p>
                                       {/* {specification.map((spec,idx) => 
                                        {<li key={idx}>{spec[0]}</li>})} */}
                                        </div>                     
                                      
                                        </div> 

                                        </div>
                                      </div>
                                      </div>
                    );
};

export default GadgetDetails;