const mongoose = require('mongoose');

const AllergySchema = new mongoose.Schema(
    {
        name: String,
        letter: String,
    },
    {
        collection: "testAllergies",
        timestamps: true
    }
)

const Allergy = mongoose.model('Allergy', AllergySchema)


module.exports = Allergy;