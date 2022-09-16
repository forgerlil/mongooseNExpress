const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRoutes.js');

// To enable our environment variables, we need to import dotenv and run the config() method BEFORE
// any other file or code that needs environment variables requires them.
require('dotenv').config();
// We import our connectToDB function from our dbConnection.js file
const connectToDB = require('./DB/dbConnection.js');
// And we immediately run it, to have our database connection up as soon as the process/server starts.
// While connectToDB is an async function, the time for it to conclude is quick enough to not have to wait for it to establish.
connectToDB();

const port = process.env.PORT || 5000;

// We have our app respond only to the '/authors' route, so all previous routes and relevant files/code were erased.
// In the authors, we will perform all CRUD operations, connect to our MongoDB database and with the help of our ODM
// Mongoose, create schemas and perform queries.
app.use('/authors', authorRouter);

app.listen(port, () => console.log('Server started on port ' + port));