'use strict';

const pedidoData = require('../data/pedido');

const getAllPedidosbarra = async (req, res, next) => {
    try {

        //const pedidolist = 'API v1.0.0 - Conexao com o banco de dados OK';
        res.send(`Conexao com o banco de dados OK | Lanchonete - API v1.0.0`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllPedidos = async (req, res, next) => {
    try {

        const pedidolist = await pedidoData.getPedidos();
        res.send(pedidolist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getPedido = async (req, res, next) => {
    try {
        const lanchePedido = req.params.id;
        const pedido = await pedidoData.getById(lanchePedido);
        res.send(pedido);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addPedido = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await pedidoData.creatPedido(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatPedido = async (req, res, next) => {
    try {
        const lancheId =  req.params.id;
        const data = req.body;
        const updated = await pedidoData.updatePedido(lancheId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletePedido = async (req, res, next) => {
    try {
        const lancheId = req.params.id;
        const deletedPedido = await pedidoData.deletePedido(lancheId);
        res.send(deletedPedido);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllPedidosbarra,
    getAllPedidos,
    getPedido,
    addPedido,
    updatPedido,
    deletePedido
}