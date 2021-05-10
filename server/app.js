const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();

require('./src/routes/index')(app);

app.use(cors());
app.use(express.json());

let appPort = config.get('app.port');

app.listen(appPort);