import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Gadgets from './Component/Gadgets/Gadgets';
import GadgetDetails from './Component/details/GadgetDetails';
import Dashboard from './Component/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Cart from './Component/addToCart/Cart';
import Wishlist from './Component/Wishlist/Wishlist';
import AllGadgets from './Component/AllGadgets/Allgadgets';
import Statistic from './Component/Stastic/Statistic';
import Faq from './Component/FAQ/Faq';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';


const router = createBrowserRouter([
  {
path: '/',
element: <Root></Root>,
errorElement: <Error></Error>,

children: [
  {
          
  path: '/',
  loader: () => fetch('/gadget.json'),
  element: <Gadgets></Gadgets>,


},
  {
          
  path: '/allGadget',
  loader: () => fetch('/gadget.json'),
  element: <AllGadgets></AllGadgets>


},
  {
          
  path: 'category/:category',
  loader: () => fetch('/gadget.json'),
  element: <Gadgets></Gadgets>

},

]
  },
  {
    path: '/gadget-details/:id',
    loader: () => fetch('/gadget.json'),
    element: <GadgetDetails></GadgetDetails>
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,

    children: [
      {
        path: '/dashboard',
            element: <Cart></Cart>
      },
      {
        path: '/dashboard/cart',
            element: <Cart></Cart>
      },
      {
        path: '/dashboard/wishlist',
        element: <Wishlist></Wishlist>
      }
    ]
  
  },
  {
    path: '/statistic',
    element: <Statistic></Statistic>
  },
  {
    path: '/gadgets/faq',
    element: <Faq></Faq>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
  </StrictMode>,
)
