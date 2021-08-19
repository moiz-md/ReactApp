import React from 'react';
import Footer from '../../Atom/Footer/footer';
import Navbar from '../../Atom/Navbar/navbar';
import './mainlayout.css'

const Mainlayout = () => {
    return (
        <>
    <div className="align-top">
        <Navbar />
        </div>
        <div className="align-bottom">
        <Footer /> 
        </div>
    </>
    )
}

export default Mainlayout;