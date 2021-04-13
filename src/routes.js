const express = require('express');
const passport = require('passport');
const productController = require('./controllers/productController')
const allergyController = require('./controllers/allergyController')
const userController = require("./controllers/userController");


const router = express.Router()

router.route('/allergies')
.get(allergyController.listAllergies)
.post(allergyController.createAllergy)

router.route("/user/register")
.post(userController.registerUser)

router.route('/product')
.get(productController.listProducts)
.post(productController.postProduct);

router.route('/product/:id')
.delete(productController.deleteProduct)

router.route('/user/:id/product/:codebar')
.get(productController.checkProductByBarcode)

router.route("/users")
.get(userController.listUsers)



module.exports = router
