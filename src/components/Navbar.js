import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar t bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fst-italic" to="/">Zomato</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 px-5" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 px-5" aria-current="page" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 px-5" aria-current="page" to="/">Contact</Link>
                            </li>
                            {/* <Link to="/orderData" className="btn btn-outline-info p-2 mb-3">Order Now</Link> */}
                            <li className="nav-item">
                                <Link className="nav-link fs-5 px-5" style={{ marginLeft: "400px" }} to="/login"><i class="fa-solid fa-right-to-bracket"></i> Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 px-5" to="/createuser"><i class="fa-solid fa-arrow-up-left-from-circle"></i>SignUp</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}