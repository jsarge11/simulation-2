const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

require('dotenv').config()

let port = 4000;
let app = express();

app.use(bodyParser.json());
app.get('/api/houses', ctrl.create);

massive(process.env.CONNECTION_STRING).then(connection => {
 app.set('db', connection);
 app.listen(port, console.log('simulating on port ' + port))
})

