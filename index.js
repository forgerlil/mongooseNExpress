const express = require('express');
const app = express();
require('dotenv').config();
const connectToDB = require('./DB/dbConnection.js');
connectToDB();
const authorRouter = require('./routes/authorRoutes.js');
const sanitize = require('express-mongo-sanitize');


const port = process.env.PORT || 5000;

app.use(sanitize({ allowDots: true, replaceWith: "_" }))

// When receiving data from the body of a request, it is important to parse it. This is easily handled by the express.json() middleware!
// Remember: the .json() method only works if your request is sending json in the body. If it is sending form data, you will need to use the .urlencoded() method.
app.use(express.json());

app.use('/authors', authorRouter);

app.listen(port, () => console.log('Server started on port ' + port));