/* require('dotenv').config() */
let express = require('express');
const cors = require('cors')
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let connexionRouter = require('./routes/connexion');
let personnageRouter = require('./routes/personnage');
let commentaireRouter = require('./routes/commentaire');

const mongoose = require('mongoose');
const DB_URI = process.env.SCALINGO_MONGO_URL || "mongodb://localhost:27017/glazo"
mongoose.connect(DB_URI).then(() => console.log('DB OK'))

let app = express();

app.use(cors()) // <= permet d'autoriser les connexions depuis toutes les adresses

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', connexionRouter);
app.use('/personnage', personnageRouter);
app.use('/commentaire', commentaireRouter);
app.use('/', indexRouter);

module.exports = app;