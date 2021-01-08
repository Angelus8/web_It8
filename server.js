//load module
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//load database
const mongoose = require('mongoose');
const config = require('./config');

//init app
const app = express();

//Load routes 
const authRoutes = require('./routes/auth');

//Connect database
mongoose.connect( config.database, { useNewUrlParser: true, useUnifiedTopology: true} )
        .then(() => { console.log("Base de donnee connecte avec succes");})
        .catch(() => { console.log("Erreur de connection a la base de donnee"); })
//conf bodyParser
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

//view engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))


//Given acces routes
app.get('/', (req, res) => {
    res.render('index')
});

app.use('/api', authRoutes);




//listen port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
    console.log("Le serveur est ouvert sur le port",PORT);
})