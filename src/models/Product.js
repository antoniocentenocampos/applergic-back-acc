//codigo de barras
//datos del pto (nombre, marca, descr)
//lista de alergenos

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: String,
        brand: String,
        description: String,
        codebar: String,
        allergies: [{ type: mongoose.Types.ObjectId, ref: "Allergy" }],
    },
    {
        collection: "testProducts",
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)


module.exports = Product;