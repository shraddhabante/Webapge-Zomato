let express=require("express");
let router=express.Router();
let orderModel=require("../model/orderModel");


router.post("/addOrder",async (request, response) => {
    let order = request.body;
    try {
        let result = await orderModel.insertMany(order);
        // response.json(result)
        if (result != null) {
            response.json({ "msg": "order details stored sucessfully" })
        }
    } catch (err) {
        response.json({"msg":"order Id must be unique"})
    }
})

module.exports=router;