const express = require ("express");
const router = express.Router();

// importamos el controlador de rutas

const alquilerController = require ('../controllers/mainController.js');

// procesamos el pedido por get

router.get ("/", alquilerController.index);

// exportamos el modulo

module.exports = router;