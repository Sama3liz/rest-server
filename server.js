require('./config/config')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('./server/routes/usuario'))

/* Conexion con la db */
mongoose.connect(process.env.URLDB, { useNewURLParser: true },
 (err, res) => {
     if (err) {
         throw err;
     }
     console.log("Conectado a la DB");
 });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))