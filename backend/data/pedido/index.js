'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getPedidos = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pedido');
        const pedidoList = await pool.request().query(sqlQueries.pedidolist);
        return pedidoList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(lanchePedido) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pedido');
        const pedido = await pool.request()
                            .input('lanchePedido', sql.Int, lanchePedido)
                            .query(sqlQueries.pedidobyId);
        return pedido.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatPedido = async (pedidodata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pedido');
        const insertPedido = await pool.request()
                            .input('lanchePedido', sql.NVarChar(100), pedidodata.lanchePedido)
                            .input('lancheNome', sql.NVarChar(100), pedidodata.lancheNome)         
                            .input('lancheDescricao', sql.NVarChar(1500), pedidodata.lancheDescricao)
                            .input('lancheValor', sql.Int, pedidodata.lancheValor)
                            .input('lancheStatus', sql.Int, pedidodata.lancheStatus)
                            .query(sqlQueries.createPedido);                            
        return insertPedido.recordset;
    } catch (error) {
        return error.message;
    }
}

const updatePedido = async (lancheId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('pedido');
        const update = await pool.request()
                        .input('lancheId', sql.Int, lancheId)
                        .input('lanchePedido', sql.NVarChar(100), data.lanchePedido)
                        .input('lancheNome', sql.NVarChar(100), data.lancheNome)                         
                        .input('lancheDescricao', sql.NVarChar(1500), data.lancheDescricao)
                        .input('lancheValor', sql.Int, data.lancheValor)
                        .input('lancheStatus', sql.Int, data.lancheStatus)
                        .query(sqlQueries.updatePedido);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deletePedido = async (lancheId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deletePedido = await pool.request()
                            .input('lancheId', sql.Int, lancheId)
                            .query(sqlQueries.deletePedido);
        return deletePedido.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getPedidos,
    getById,
    creatPedido,
    updatePedido,
    deletePedido
}