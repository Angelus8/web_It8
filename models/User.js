const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    numero:{
        type: Number,
        required: true
    },
    filiere: {
        type: String,
        required: true
    },
    origine: {
        type: String,
        required: true
    },
    commune: {
        type: String,
        required: true
    },
    cite: {
        type: String,
        required: true
    },
    social: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);