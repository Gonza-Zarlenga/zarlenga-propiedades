const express = require('express');
const app = express();
const router = express.Router();
const path = require("path");

// enrutadores

const mainRouter = require ("./routes/mainRouter.js");
const alquilerRouter = require ("./routes/alquilerRouter.js")
const alquiler_detailRouter = require ("./routes/alquiler_detailRouter.js")

//********* Tempalte Engie **********///
app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname,"views"));

// Recursos estaticos 

app.use (express.static('public'));

// usando enrutadores importado

app.use ('/', mainRouter);
app.use ('/alquiler', alquilerRouter);
app.use ('/alquiler/detail', alquiler_detailRouter);

app.use((req,res,next)=>{
    res.status(404).render("notFound")
});

// corriendo el servidor 

app.listen (3040,()=>{
    console.log ("corriendo ook")
});