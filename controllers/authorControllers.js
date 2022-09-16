const AuthorCollection = require('../models/authorModel');

const getAuthors = async (req, res) => {
  try {
    const authors = await AuthorCollection.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getAuthorById = async (req, res) => {
  try {
    const {id} = req.params;    
    const authorById = await AuthorCollection.findById(id);
    // We do a conditional check to see if the author exists. If it does, we return the author. If it doesn't, we return a 404 status code and a message.
    if (authorById) return res.status(200).json(authorById);
    // Remember, if you send a response like so, make sure that it be the return of your function, otherwise, you will get an error "Cannot set headers after they are sent to the client"
    // Meaning: Your function sent a response but did not return, so it continues execution, and the next step is to send another response.
    res.status(404).send('Author not found');
  } catch (error) {
    res.status(500).send(error.message);
  }
}


const postAuthor = (req, res) => {

}

const updateAuthor = (req, res) => {

}

const deleteAuthor = (req, res) => {

}

module.exports = {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor}