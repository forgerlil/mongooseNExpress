const express = require('express');
const app = express();
require('dotenv').config();
const connectToDB = require('./DB/dbConnection.js');
connectToDB();
const authorRouter = require('./routes/authorRoutes.js');


const port = process.env.PORT || 5000;

// Since mongoose does not provide a sanitization tool out of the box, we can
// make use of the express-mongo-sanitize package to sanitize our data, by
// remoing any dollar signs ($) from the request body, query or params.
// Documentation for it: https://www.npmjs.com/package/express-mongo-sanitize
// It serves as a middleware, so we can apply it to our whole app!
// Require it first:
const sanitize = require('express-mongo-sanitize');
// Then apply it to our app (you can also pass arguments to tailor your sanitization further)
app.use(sanitize({ allowDots: true, replaceWith: "_" }))

app.use('/authors', authorRouter);

app.listen(port, () => console.log('Server started on port ' + port));