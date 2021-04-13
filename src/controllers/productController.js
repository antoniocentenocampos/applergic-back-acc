
const { request } = require('express');
const Product = require('../models/Product');
const User = require('../models/User');

async function postProduct(req, res) {

    try {

        const newProduct = new Product(req.body);

        const savedProduct = await newProduct.save();

        res.json({ results: [savedProduct] });

    } catch (err) {
        res.json({ error: err.message })
    }
}

async function listProducts(req, res) {
    try {
        const results = await Product.find();
        res.json({ results: results });
    }
    catch (err) {
        res.json({ saved: false })
    }
}

async function deleteProduct(req, res) {
    try {
        const results = await Product.findById(req.params.id);
        res.json({ results: results });
    }
    catch (err) {
        res.json({ saved: false })
    }
}

async function checkProductByBarcode(req, res) {
    try {
        const results = await Product.findOne({codebar: req.params.codebar}); //null seria marillo, si devuelve un pto hay que cruzar con el user y ver si es verde o rojo
        if(results) {
            const userResult = await User.findById(req.params.id);
            //cruzar datos de ptos con las alergias del user, resultado o rojo o verde
        }
        res.json({ results: results }); //aqui ponemos si el pto es apto no apto o no hay datos (result vacio, pto no registrado)
    }
    catch (err) {
        res.json({ saved: false })
    }
}

module.exports = {
    postProduct,
    listProducts,
    deleteProduct,
    checkProductByBarcode
}