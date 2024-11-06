import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsDesign from './DetailsDesign';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { addToLStorage, addToLStorage2, getGadget, getGadget2 } from '../LocalStorage/Localstorage';
import { toast } from 'react-toastify';

const GadgetDetails = () => {


  useEffect(() =>{
    document.title="Gadget-Details | Gadget & Gear"
   },[])

const data = useLoaderData()
const {id} = useParams()
const idNum = parseInt(id)

const [details, setDetails] = useState([])
const [addToChart, setAddToChart] = useState(false)
const [addToLove, setAddToLove] = useState(false)





useEffect(() => {
                  
                  
                    const filterd = data.find(gadget => gadget.product_id === idNum)
                    setDetails(filterd);
                   const addLove = getGadget2()
                    const isExist2 = addLove.find(item => item.product_id === filterd.product_id)
                    if(isExist2){
                     setAddToLove(true)
                    }
             
                    
},[data,idNum])

useEffect(() => {
                  
                  
                    const filterd = data.find(gadget => gadget.product_id === idNum)
                    setDetails(filterd);
                   const addChart = getGadget()
                   const isExist = addChart.find(item => item.product_id === filterd.product_id)
                   if(isExist){
                   setAddToChart(true)
                  
                   }
             
                    
},[data,idNum])

const {product_title,product_image,product_id,price,description,availability,rating,specification} = details

if(!Array.isArray(specification)){
  console.error('details is not array',specification);
  return null
  
}



const handleChart = () => {
  toast.success(` ${product_title} add to cart Successfully`)
  addToLStorage(details)
  setAddToChart(!addToChart)
}

const handleLove = () => {
  toast.success(`${product_title} add to wishlist Successfully`)
  addToLStorage2(details)
  setAddToLove(!addToLove)
}


                    return (

                                        <div className=''>
                                       <div className='relative container mx-auto'>
                                          <Navbar></Navbar>
                                        <DetailsDesign></DetailsDesign>
                                        <div className='lg:w-10/12  border p-3 bg-white rounded-xl  absolute top-80 lg:left-[8%] '>
                                        <div className='  rounded-xl flex flex-col sm:flex-row ' >
                                      <img className='h-[100%] w-[50%] rounded-xl' src={product_image} alt="" /> 
                                      <div className=' space-y-4'>
                                        <h1 className='text-3xl font-bold'>{product_title}</h1>
                                        <h3 className='text-xl font-bold'>Price: $ {price}</h3>
                                        <button className={`btn text-xl font-medium ${availability ? 'text-green-400': 'text-red-500'}`}>{availability ? 'stock' : 'out of stock'}</button>
                                        
                                        <p className='text-xl font-medium text-gray-600'>{description}</p>
                                        <p className='text-2xl font-semibold'>Specification</p>
                                        <ol style={{ listStyleType: "number" }}>
                                      {specification.map((spec,idx) => <li className='text-xl ml-4' key={idx}>{spec}</li>)}
                                      </ol>
                                      <div className='flex gap-10 items-center'>
                                      <h4 className='text-2xl font-medium'>Rating</h4>
                                      <p className='text-xl'>{rating}</p>
                                      </div>
                                      <div className='flex gap-5'>
                                        <button onClick={handleChart} disabled={addToChart}  className='btn bg-[#9538E2] text-xl font-medium text-white'>Add to Chart<i className="fa-solid fa-cart-plus "></i></button>
                                        <button onClick={handleLove}  disabled={addToLove} className='text-xl font-medium px-3 py-1 border rounded-full'><i className="fa-regular fa-heart"></i></button>
                                      </div>
                                        </div>                     
                                        </div> 

                                        </div>
                                      </div>
                                        <Footer id={id}></Footer>
                                      </div>
                    );
};

export default GadgetDetails;