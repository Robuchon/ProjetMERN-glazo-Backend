const mongoose = require('mongoose')

const utilisateurSchema = mongoose.Schema({
    mail:String, 
    password:String, //String Hasher
    pseudo:String, 
    age:Number, 
    bio:String, 
    genre:String
})

const UtilisateurModel = mongoose.model('user', utilisateurSchema)

module.exports = UtilisateurModel

/*  */