const express = require('express');
const app = express();
require('dotenv').config();
const connectToDB = require('./DB/dbConnection.js');
connectToDB();
const authorRouter = require('./routes/authorRoutes.js');
const sanitize = require('express-mongo-sanitize');


const port = process.env.PORT || 5000;

app.use(sanitize({ allowDots: true, replaceWith: "_" }))
app.use(express.json());

app.use('/authors', authorRouter);

app.listen(port, () => console.log('Server started on port ' + port));