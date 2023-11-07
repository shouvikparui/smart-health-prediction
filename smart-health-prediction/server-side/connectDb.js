const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/smart-health',{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Successful connection....");
}).catch((err)=>{
    console.log(err);
})
