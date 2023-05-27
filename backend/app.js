let express=require('express')
let app=express();
let cors=require("cors");
let dbConfig=require("./config/dbConfig");
let orderRouter=require("./router/orderRouter")
dbConfig.dbConnection;

app.use(express.json());
app.use(cors());

app.use("/api/order",orderRouter)

app.listen(3000,()=>console.log("server running on port number 3000"));