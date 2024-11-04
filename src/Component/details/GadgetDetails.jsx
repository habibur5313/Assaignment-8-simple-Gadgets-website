import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsDesign from './DetailsDesign';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { addToLStorage, addToLStorage2, getGadget, getGadget2 } from '../LocalStorage/Localstorage';
import { toast } from 'react-toastify';

const GadgetDetails = () => {

const data = useLoaderData()
const {id} = useParams()
const idNum = parseInt(id)

const [details, setDetails] = useState([])
const [addToChart, setAddToChart] = useState(false)
const [addToLove, setAddToLove] = useState(false)


useEffect(() => {
                  
                    const filterd = data.find(gadget => gadget.product_id === idNum)
                    setDetails(filterd);

                    const addChart = getGadget()
                   const isExist = addChart.find(item => item.product_id == filterd.product_id)
                   if(isExist){
                   setAddToChart(true)
                  
                   }
                    const addLove = getGadget2()
                   const isExist2 = addLove.find(item => item.product_id == filterd.product_id)
                   if(isExist2){
                    setAddToChart(true)
                   }
                    

                   
                    
},[data,idNum])

const {product_title,product_image,product_id,price,description,availability,rating,specification} = details

if(!Array.isArray(specification)){
  console.error('details is not array',specification);
  return null
  
}



const handleChart = () => {
  toast.success('Item added Successfully')
  addToLStorage(details)
  setAddToChart(!addToChart)
}

const handleLove = () => {
  addToLStorage2(details)
  setAddToLove(!addToLove)
  toast.success('Item added Successfully')
}








                    return (
                                        <div className='container mx-auto'>
                                       <div className='relative'>
                                          <Navbar></Navbar>
                                        <DetailsDesign></DetailsDesign>
                                        <div className='lg:w-10/12  border p-3 bg-white rounded-xl  absolute top-80 lg:left-[8%] '>
                                        <div className=' h-[500px]  rounded-xl flex flex-col sm:flex-row ' >
                                      <img className='h-[100%] w-[50%] rounded-xl' src={product_image} alt="" /> 
                                      <div>
                                        <h1>{product_title}</h1>
                                        <h3>{price}</h3>
                                        <button className='btn text-green-400'>stock</button>
                                        <p>{description}</p>
                                        <p>Specification</p>
                                        <ol style={{ listStyleType: "number" }}>
                                      {specification.map((spec,idx) => <li key={idx}>{spec}</li>)}
                                      </ol>
                                      <h4>Rating</h4>
                                      <p>{rating}</p>
                                      <div className='flex gap-5'>
                                        <button onClick={handleChart} disabled={addToChart}  className='btn bg-[#9538E2] text-xl font-medium text-white'>Add to Chart<i className="fa-solid fa-cart-plus "></i></button>
                                        <button onClick={handleLove} disabled={addToLove} className='text-xl font-medium px-3 py-1 border rounded-full'><i className="fa-regular fa-heart"></i></button>
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