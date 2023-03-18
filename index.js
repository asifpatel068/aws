const express=require("express")
const fs=require("fs")
const app=express()

// const {timeLogger}=require("./middleware/timelogger.middleware")
// const {watchMan}=require("./middleware/watchMan.middleware")
// const {logger}=require("./middleware/logger.middleware")
// const {addRoll}=require("./middleware/addRoll.middleware")


app.use(express.json())
// app.use(watchMan)
// app.use(timeLogger)
// app.use(logger)
// app.use(addRoll)

app.get("/",(req,res)=>{
    console.log("Welcome")
    res.send("Welcome")
})

app.get("/contact",(req,res)=>{
    res.send("Contact")
})

app.get("/data",(req,res)=>{
    const data={
        delhi:"25c",
        mumbai:"20c",
        bamglore:"18c"
    }
    let q=req.query
    res.send("About")
})

app.get("/about",(req,res)=>{
    res.send("About")
})



app.post("/newstudent",(req,res)=>{
    console.log(req.body)
    res.send("new added")
})


app.listen(3500,()=>{
    console.log("server is Running at localhost:3500")
})


