const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const {myMiddleware, getRequestOnRoot, postRequestOnRoot, putRequestOnRoot, deleteRequestOnRoot} = require('./controllers/rootControllers.js');

app.use(myMiddleware);
app.route('/').get(getRequestOnRoot).post(postRequestOnRoot).put(putRequestOnRoot).delete(deleteRequestOnRoot);
app.use('/authors', authorRouter)


app.listen(port, () => console.log('Server started on port ' + port));