const express = require('express');
const bodyParser = require("body-parser");
const res = require('express/lib/response');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));

require('./app/controllers/index')(app);

app.listen(3000);
