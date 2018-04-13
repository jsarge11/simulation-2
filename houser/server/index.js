const express = require('express')
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.json());


let port = 4000;
app.listen(port, console.log('simulating on port ' + port))