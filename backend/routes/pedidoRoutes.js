'use strict';

const express = require('express');
const pedidoControll = require('../controllers/pedidoController');
const router = express.Router();

router.get('/', pedidoControll.getAllPedidosbarra);
router.get('/pedidos', pedidoControll.getAllPedidos);
router.get('/pedido/:id', pedidoControll.getPedido);
router.post('/pedido', pedidoControll.addPedido);
router.put('/pedido/:id', pedidoControll.updatPedido);
router.delete('/pedido/:id', pedidoControll.deletePedido);


module.exports = {
    routes: router
}