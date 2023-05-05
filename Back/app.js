const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000
const helmet = require('helmet');
const Routes = require('./routes/excuses')

mongoose.connect('mongodb+srv://newuser:newuserpassword@excusesdedev.mcbmvhk.mongodb.net/test', //Connexion à la base de données
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(helmet()); // package de sécurité basique et invisible à l'utilisation
app.use(express.json());

app.use((req, res, next) => { // Configuration des headers pour pouvoir faire des requêtes depuis une autre origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});


app.use('/',Routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})