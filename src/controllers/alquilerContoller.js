const express = require("express");
const path = require("path");

// creamos el objeto literal con las funciones 

const alquilerController = {

    index: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "../views/alquiler.html"))
    }

};

// exportamos el modulo

module.exports = alquilerController;