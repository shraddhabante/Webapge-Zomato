import React, { useState } from 'react'
import ItemsData from './ItemsData';
import { Link } from 'react-router-dom';
function ShowItems() {
    const [data,setData]=useState(ItemsData)
    const filterLocation=(locationData)=>{
        const result=ItemsData.filter((currData)=>{
            return currData.Location===locationData;
        });
        setData(result);
    }
    const filterRating=(ratingData)=>{
        const rating=ItemsData.filter((currRate)=>{
            return currRate.Rating===ratingData;
        });
        setData(rating);
    }
    return (
        <>
            <h2 className='m-5 text-center'>All Available Items!</h2>
            <div className='container-fluid'>
                <div className='row mt-5 mx-5'>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterLocation('Nagpur')}>Nagpur</button>
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterLocation('Mumbai')}>Mumbai</button>
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterRating(4)}>Rating 4</button>
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-4' onClick={()=>filterRating(4.5)}>Rating 4.5</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex row justify-content-evenly mx-3">
                    {data.map(
                        (p) => {
                            return (
                                <div className="col-md-3 col-sm-6 card ms-5 mb-3" key={p.id}>
                                    <div className="">
                                        <div className="card-img-top">
                                            <img src={p.img} style={{ height: "230px", width: "300px" }} />
                                        </div>
                                        <div className="card-body">
                                            <h4 className='text-center'>{p.Name}</h4>
                                            <div className="d-flex row">
                                                <div className="col-lg-6">
                                                    <p>Category:{p.category}</p>
                                                    <p>Price:{p.price}</p>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>Location:{p.Location}</p>
                                                    <p>Rating:{p.Rating}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <Link to="/home/order" className="btn px-4 py-2 btn btn-warning mx-5">Order now</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
export default ShowItems;