    // Title: Netflix clone
    // Author: Md Samiul Islam.
    // Project Owner: Md Samiul Islam
    // Description: 


const express = require("express");
const app = express();
const port = app.listen.PORT || 5000;
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const dotenv = require("dotenv");
dotenv.config();

// connect with mongoose
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("our db connection is successfull !"))
.catch((err)=> console.log(err))

// use middle ware
app.use(express.json());

// use route
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

// root route
app.get("/", (req,res)=>{
    res.send("Connected server")
})

// port listening
app.listen(port, () =>{
    console.log(`port listening at ${port}`);
})