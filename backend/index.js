'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', pedidoRoutes.routes);



app.listen(config.port, () => {
  console.log('API Lachonete executando em http://localhost:' + config.port + '/api/v1/pedidos' )
});