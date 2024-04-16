const express = require ("express");
const router = express.Router();

// importamos el controlador de rutas

const mainController = require ('../controllers/mainController.js');

// procesamos el pedido por get

router.get ("/", mainController.index);

// exportamos el modulo

module.exports = router;