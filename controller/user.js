const User = require('../models/User');

exports.createUser = (req, res) => {
    const {
        nom,
        prenom,
        email,
        numero,
        filiere,
        origine,
        habitat,
        cite,
        social,
        username,
        password
    } = req.body;
    console.log(nom,habitat, origine);
    const user = new User({
        nom,
        prenom,
        email,
        numero,
        filiere,
        origine,
        habitat,
        cite,
        social,
        username,
        password
    });
    user.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
};