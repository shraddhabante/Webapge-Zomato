import axios from "axios";
import {  useState } from "react";
// import { Link } from "react-router-dom";


function AddOrder() {
    let [userName, setName] = useState("");
    let [itemName, setItem] = useState("");
    let [noOfItems, setNoOfItem] = useState("");
    let [orderDate, setOrderDate] = useState("");
    let [location, setLocation] = useState("");
    let [rating, setRating] = useState("");


    async function addOrderData(event) {
        event.preventDefault();
        let category = { userName:userName, itemName:itemName,noOfItems:noOfItems,orderDate:orderDate,location:location,rating:rating};
        console.log(category);
        let result = await axios.post("http://localhost:3000/api/order/addOrder", category, {
            headers: {
                "Content-type": "application/json",
            }
        });
        alert(result.data.msg)
    }


    return (
        <div>
           <form onSubmit={addOrderData}>
                <h2 className="mt-5">Add Order Details!</h2>
                <div className="container mx-auto col-md-4 p-3 bg-info bg-opacity-10 border border-info border-start rounded">
                    <div className="row">
                        <div className="row">
                            <label className="col-sm-4 col-form-label">User Name</label>
                            <input type="text" name="userName" className="m-1 col-sm-6" onChange={(e) => setName(e.target.value)} /><br />
                        </div>
                        <div className="row">
                            <label className="col-sm-4">item Name</label>
                            <input type="text" name="itemName" className="m-1 col-sm-6" onChange={(e) => setItem(e.target.value)} /><br />
                        </div>
                        <div className="row">
                            <label className="col-sm-4">No. Of items</label>
                            <input type="number" name="noOfItems" className="m-1 col-sm-6" onChange={(e) => setNoOfItem(e.target.value)} /><br />
                        </div>
                        <div className="row">
                            <label className="col-sm-4">order Date</label>
                            <input type="date" name="pQuantity" className="m-1 col-sm-6" onChange={(e) => setOrderDate(e.target.value)} /><br />
                        </div>
                        <div className="row">
                            <label className="col-sm-4">Location</label>
                            <input type="text" name="amount" className="m-1 col-sm-6" onChange={(e) => setLocation(e.target.value)} /><br />
                        </div>
                        <div className="row">
                            <label className="col-sm-4">Rating</label>
                            <input type="number" name="rating" className="m-1 col-sm-6" onChange={(e) => setRating(e.target.value)} /><br />
                        </div>
                        <div>
                            <input type="submit" value="Order Now" className="btn btn-info m-3" />
                            <input type="cancel" value="cancel" className="btn btn-info m-3 col-sm-3" />
                        </div>
                    </div>


                </div>
            </form>
            {/* <span>{msg}</span> */}

        </div>
    )
}
export default AddOrder;