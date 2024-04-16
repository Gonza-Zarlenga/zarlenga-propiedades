const express = require('express');
const app = express();

// enrutadores

const mainRouter = require ("./routes/mainRouter.js");

// Recursos estaticos 

app.use (express.static('public'));

// usando enrutadores importado

app.use ('/', mainRouter);


// corriendo el servidor 

app.listen (3040,()=>{
    console.log ("corriendo ok")
});