const express = require("express");
const path = require("path");

// creamos el objeto literal con las funciones 

const mainController = {

    index: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    }

};

// exportamos el modulo

module.exports = mainController;