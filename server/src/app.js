const express = require('express');
const cors = require('cors');
const app = express();

require('./routes/index')(app);

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8080);