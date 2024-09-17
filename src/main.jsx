import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MAinLayOut/MainLayOut.jsx';
import Home from './Pages/Home.jsx';
import Country from './Pages/Country/Country.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut>,
     children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/country/:cca3',
        element:<Country></Country>,
        loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.cca3}`)
      }
     ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-7xl mx-auto '>
  <RouterProvider router={router} ></RouterProvider>
  </div>
  </StrictMode>,
)
