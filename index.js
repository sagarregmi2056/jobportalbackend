const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
require('dotenv').config();
var cors = require('cors');
const errorHandler = require("./middleware/error");

// importing routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobTypeRoute = require('./routes/jobsTypeRoutes');
const jobRoute = require('./routes/jobsRoutes');

// connection 
const mongoose = require("mongoose");
const morgan = require("morgan");

const port = process.env.PORT || 4000

// database connection 

mongoose.connect(process.env.DATABASE,{
    
   
   useNewUrlParser: true, 
   useUnifiedTopology: true 

}).then(()=>{
    console.log("DB CONNECTED VAYO HAI SOLTI")
}).catch((err)=>{
    console.log(`data base ma error hanyo hai ,${err}  `)
});
// middleware 
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser());
app.use(cors());



// routes middleware
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api', jobTypeRoute);
app.use('/api', jobRoute);


// error middleware
app.use(errorHandler);



app.listen(port,()=>{
    console.log(`server listening from ${process.env.DEV_MODE} mode at the port:${port}`)
})
