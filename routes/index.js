const express = require('express');

const  productRouter = require('./productos.router')
const  categories = require('./categories.router')
const  users = require('./usuarios.router')

function routerApi (app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productRouter);
    router.use('/categories', categories);
    router.use('/',users)
}

module.exports = routerApi;
