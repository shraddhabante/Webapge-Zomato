import React from 'react'
export default function Footer() {
  return (
    <div>
      
    <footer>
                <div style={{backgroundColor: "rgb(2, 5, 29)" }}className="text-white">
                    <div className="container">
                        <div className="d-flex">
                            <div className="col-lg-4 mt-3">
                                <h3>Our Address</h3>
                                <p>
                                    <i className="fa-solid fa-location-dot"></i> 1418 Riverwood
                                    Drive,<br />
                                    Suite 3845 Cottonwood,<br />
                                    CA 96022<br />
                                    United States
                                </p>
                            </div>
                            <div className="col-lg-4 mt-3" style={{listStyleType:"none"}}>
                                <h3>Contact Info</h3>
                                <li><i className="fa-solid fa-phone"></i> +9976564534</li>
                                <li><i className="fa-solid fa-envelope"></i> zomato@gmail.com</li>
                                <li><i className="fa-solid fa-house-medical"></i> Chennai,India</li>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <h3>Follow Us</h3>
                                <div className="mt-4">
                                    <i className="fa-brands fa-instagram fa-2x m-2"></i>
                                    <i className="fa-brands fa-facebook fa-2x m-2"></i>
                                    <i className="fa-brands fa-twitter fa-2x m-2"></i>
                                    <i className="fa-regular fa-envelope fa-2x m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}
