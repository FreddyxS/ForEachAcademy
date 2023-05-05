const Excuse = require('../models/excuses');

exports.listExcuse= (req,res,next) => {
    Excuse.find() // Prend la liste des excuses puis la renvoie au format json
    .then(excuse => res.status(200).json(excuse))
    .catch(error => res.status(400).json({error}))
}

exports.ajoutExcuse = (req,res,next) => {
    Excuse.find() // Prend la liste des excuses , puis recherche la longueur de celle ci afin d'y ajouter le code suivant
    .then(list => {
        const httpCode = list[list.length-1].http_code+1
        const excuseObject = req.body;
        console.log(excuseObject);
        const excuse = new Excuse({ // sauvegarde l'excuse avec les paramètres de la requête 
            http_code:httpCode,
            tag: req.body.tag,
            message: req.body.message
        })
    
        excuse.save()
        .then(() => {res.status(201).json({message: 'Excuse enregistrée'})})
        .catch(error => {res.status(400).json({error})})
    })

   
}