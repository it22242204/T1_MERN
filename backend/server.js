const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const infoRoute = require('./routes/InfoRoute');

app.use(express.json());

app.get('/',function(req,res){
    res.send('Ashokan is on 🔥❤️‍🔥')
})

//middleware
// app.use((req,res,next) => {
//     console.log(req.path, req.method);
//     next();
// })

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT ,() => {
        console.log ("Connected to MongoDB : " + process.env.PORT );
    });
})
.catch((error) => console.log(error));

app.use('/api/info',infoRoute);



