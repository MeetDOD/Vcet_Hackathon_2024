import React from 'react'

import { Outlet } from 'react-router-dom';
import Navbar  from './components/navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
   

    return (
        <>
            <Navbar />
           
                <Outlet />

            
                
                        
              
     
       

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;