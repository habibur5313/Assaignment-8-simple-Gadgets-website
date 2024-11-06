
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { useEffect } from "react";

const Faq = () => {


                    useEffect(() =>{
                                        document.title="FAQ | Gadget & Gear"
                                       },[])
                    return (
                                        <div>
                                       <div className='container mx-auto min-h-[calc(100vh-203px)]'>
                                        <Navbar></Navbar>
                                        <div className={`flex flex-col justify-center items-center bg-[#9538E2] pt-10 pb-20 space-y-5 rounded-xl`}>
                                        <h1 className='lg:text-6xl md:text-3xl text-2xl  w-11/12 xl:w-10/12 text-center mx-auto text-white font-bold'>Frequently Asked Questions</h1>
                                        <p className='text-xl font-medium text-white w-11/12 md:w-10/12 mx-auto text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                        
                                        </div> 
                                        <div className="mt-10 space-y-5 w-10/12 mx-auto">
                                        <div
                                        tabIndex={0}
                                        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
                                        <div className="collapse-title">What is the best smartphone for gaming?</div>
                                        <div className="collapse-content">
                                        <p> The best smartphone for gaming currently is the Asus ROG Phone 5. It features a 144Hz display, Snapdragon 888 processor, and a 6000mAh battery, making it ideal for prolonged gaming sessions.</p>
                                        </div>
                                        </div>
                                        <div
                                        tabIndex={0}
                                        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
                                        <div className="collapse-title">How can I extend the battery life of my laptop?</div>
                                        <div className="collapse-content">
                                        <p>To extend the battery life of your laptop, reduce screen brightness, close unnecessary applications, disable Wi-Fi and Bluetooth when not in use, and use power-saving mode.</p>
                                        </div>
                                        </div>
                                        <div
                                        tabIndex={0}
                                        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
                                        <div className="collapse-title">What should I consider when buying a smartwatch?</div>
                                        <div className="collapse-content">
                                        <p>When buying a smartwatch, consider factors like compatibility with your smartphone, battery life, features (such as GPS, heart rate monitor, NFC), build quality, and design.</p>
                                        </div>
                                        </div>
                                        <div
                                        tabIndex={0}
                                        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
                                        <div className="collapse-title">Are wireless earbuds worth it?</div>
                                        <div className="collapse-content">
                                        <p>Wireless earbuds are worth it if you value convenience and portability. They offer freedom from tangled wires and often come with additional features like active noise cancellation and touch controls. However, consider the battery life and sound quality before purchasing.</p>
                                        </div>
                                        </div>

                                        <div
                                        tabIndex={0}
                                        className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content collapse">
                                        <div className="collapse-title">How do I choose the right laptop for work and entertainment?</div>
                                        <div className="collapse-content">
                                        <p>To choose the right laptop for both work and entertainment, look for a balance of performance (good processor, sufficient RAM), a decent graphics card for multimedia, a high-resolution display, ample storage, and long battery life. Brands like Dell XPS, MacBook Pro, and Lenovo ThinkPad are great options.</p>
                                        </div>
                                        </div>
                                   
                                       </div>
                                        </div>
                                        <Footer></Footer>
                                                      
                                        </div>
                    );
};

export default Faq;