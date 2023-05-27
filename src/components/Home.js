import React from 'react'
// import Card from '../Card'
// import Carousal from '../Carousal'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ShowItems from './ShowItems'


export default function () {
    return (
        <div>
            <div><Navbar></Navbar></div>
            {/* <div><Carousal></Carousal></div> */}
            <div className='homeImg'>
                <div className='homeText ps-5'>
                    <h1 className='pt-5 fs-1 fw-bold'>Are you hungry?</h1>
                    <h3 className='fw-light'>Don't Wait!!!</h3>
                    <h3 className='fw-light'>Let start to order food now!</h3>
                    {/* <Link to="/home/order" className="btn px-4 py-2 btn-outline-light" style={{ color: "whitesmoke" }}>Order now</Link> */}
                    <div className="slider-icon mt-3 align-self-center">
                        <span className="mt-xl-1 mt-lg-0 dashicons dashicons-phone"></span>
                        <span className="fs-4 border border-secondary rounded p-2 mt-2"><i
                            className="fa-solid fa-phone rounded-circle bg-dark p-2 text-white"></i>1-234-567-890</span>
                    </div>
                </div>

            </div>
            <div className='m-3'>
                {/* <Card></Card> */}
            </div>
            <div class="text-center mt-3">
                <ShowItems></ShowItems>
                {/* <Link to="/orderData" className="btn btn-info px-4 py-2 mb-3">Order to All Available Items</Link> */}
            </div>

            <div><Footer></Footer></div>
        </div>
    )
}