const express = require("express")
const app = express()
const tasks = require("./routers/people")
const connectDB = require("./db/connect")
const tank = require("./model/task")
require("dotenv").config()


app.use(express.static('./public'))
app.use(express.json())

app.use("/api/v1/tasks" , tasks)
// Not Found Middleware if any resoucres not found 

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log("database connected");
        app.listen(3000 , ()=>{
            console.log("Server is running on this port 3000.....");
        })
    } catch (error) {
        console.log(error);
    }
}

start()