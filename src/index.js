const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions));

require('./app/controllers/index')(app);


app.listen(2000)