const express = require ("express");
const router = express.Router();

// importamos el controlador de rutas

const alquiler_detailController = require ('../controllers/alquiler_detailController');

// procesamos el pedido por get

router.get ("/", alquiler_detailController.index);

// exportamos el modulo

module.exports = router;