const express = require('express');
const authorRouter = express.Router();

const {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor} = require('../controllers/authorControllers.js');

// Our author route remais unchanged. We will now have our routes actually do something with our database,
// so refer to the controllers for the actual changes!
authorRouter.route('/').get(getAuthors).post(postAuthor);
authorRouter.route('/:id').get(getAuthorById).put(updateAuthor).delete(deleteAuthor);

module.exports = authorRouter;