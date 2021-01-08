const express = require('express');
const router = express.Router();

//load controller
const userCtrl = require('../controller/user');

router.get('/auth', (req, res) => {
    res.render('form')
});

router.get('/erreur', (req,res) =>{
    res.render('erreur')
})

//create user
router.post('/data', userCtrl.createUser);

module.exports = router;