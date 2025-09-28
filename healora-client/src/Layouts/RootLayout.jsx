import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
        <Navbar></Navbar>
          <main className="min-h-screen pt-16">
          <div className="max-w-screen-2xl mx-auto">
            <Outlet />
          </div>
        </main>
           <Footer></Footer>
        </div>
    );
};

export default RootLayout;