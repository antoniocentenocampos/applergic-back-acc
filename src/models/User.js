const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        password: String,
        contactName: String,
        contactEmail: String,
        contactPhone: String,
        insurance: String,
        allergies: [{ type: mongoose.Types.ObjectId, ref: "Allergy" }],
    },
    {
        collection: "testUsers",
        timestamps: true
    }
)

const User = mongoose.model('User', UserSchema)


module.exports = User;