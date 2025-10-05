const express = require('express'); //import express for creating server
const app = express(); // create app using express for server
require('dotenv').config(); //for using .env file
const mongoose = require('mongoose'); //import mongoose for connecting to mongoDB
const infoRoute = require('./routes/InfoRoute');
const cors = require('cors');

app.use(express.json()); // to accept json data
app.use(cors());
app.get('/', function (req, res) {
    res.send('Ashokan is on 🔥❤️‍🔥')
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to MongoDB : " + process.env.PORT);
        });
    })
    .catch((error) => console.log(error));

app.use('/api/info', infoRoute);

app.get('/api/data', (req, res) => {
    const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    res.json(data);
});

