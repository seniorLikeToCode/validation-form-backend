require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./router');
require('./utils/db').connect();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', router);

app.listen(9000, () => {
    console.log(`server running on port 9000`);
});