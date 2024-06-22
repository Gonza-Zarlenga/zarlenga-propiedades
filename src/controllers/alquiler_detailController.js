const express = require("express");
const path = require("path");

// creamos el objeto literal con las funciones 

const alquiler_detailController = {

    index: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "../views/alquiler_detail.html"))
    }
};

// exportamos el modulo

module.exports = alquiler_detailController;