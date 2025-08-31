const express = require('express');
const app = express();
const port = 1000;


app.get('/',function(req,res){
    res.send('Ashokan is on 🔥')
})

app.listen(port,() => {
   console.log (`listening to port ${port}`);
});


