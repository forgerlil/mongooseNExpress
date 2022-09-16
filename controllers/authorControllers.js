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
    if (authorById) return res.status(200).json(authorById);

    res.status(404).send('Author not found');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const postAuthor = async (req, res) => {
  try {
    const {firstName, lastName, dateOfBirth} = req.body;
    // We can do some validation whether our body is sending the expected data here. If not, we can send a 400 status code and a message to the client.
    if (!firstName || !lastName || !dateOfBirth) return res.status(400).send('Please provide all required fields');

    // Then additionally we can check if the author already exists in the database. If so, we can send a 400 status code and a message to the client.
    const findAuthor = await AuthorCollection.findOne({lastName});
    if (findAuthor) return res.status(400).send('Author already exists');

    // And lastly, we can create a new author and save it to the database if everything is ok.
    const newAuthor = await AuthorCollection.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const updateAuthor = (req, res) => {

}

const deleteAuthor = (req, res) => {

}

module.exports = {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor}