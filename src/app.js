const express = require('express');
const app = express();
const path = require("path");

// enrutadores

const mainRouter = require ("./routes/mainRouter.js");

//........///
app.set ('views', path.join(__dirname,"views"));
app.set ('view engine', 'ejs');

// Recursos estaticos 

app.use (express.static('public'));
app.use((req,res,next)=>{
    res.status(404).render("notFound")
});

// usando enrutadores importado

app.use ('/', mainRouter);


// corriendo el servidor 

app.listen (3040,()=>{
    console.log ("corriendo ook")
});