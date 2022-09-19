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
    if (!firstName || !lastName || !dateOfBirth) return res.status(400).send('Please provide all required fields');

    const findAuthor = await AuthorCollection.findOne({lastName});
    if (findAuthor) return res.status(400).send('Author already exists');

    const newAuthor = await AuthorCollection.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const updateAuthor = async (req, res) => {
  try {
    const {id} = req.params;

    // Since this PUT request is meant to update any of the Author's fields, we need to check 
    // if the Author exists first
    const findAuthor = await AuthorCollection.findById(id);
    // If the Author does not exist, we return a 404 status code
    if (!findAuthor) return res.status(404).send('Author does not exist');

    // If the Author exists, we can now update the Author's fields
    // The findByIdAndUpdate method takes a few parameters, at the bare minimum:
    // Tbe id of the document to update, and the fields to update.
    // However, if you need the updated document to be returned, you need to add the
    // {new: true} parameter as a third argument so your query returns you the updated document
    const updateAuthor = await AuthorCollection.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json(updateAuthor);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const deleteAuthor = async (req, res) => {
  try {
    const {id} = req.params;
    // Similarly as for the PUT request, we need to check if the author exists first
    const findAuthor = await AuthorCollection.findById(id);
    if (!findAuthor) return res.status(400).send('Author does not exist');

    // It is not advised to completely erase an user from your database, as it can lead to
    // gaps in information (and somethimes you might need to reference an user that "deleted"
    // their account. Instead, we can set a flag to indicate that the user is no longer active
    // by swapping the active: false field to the user's document)
    const deactivateAuthor = await AuthorCollection.findByIdAndUpdate(id, {active: false}, {new: true});
    res.status(200).json(deactivateAuthor);

    // Alternatively, if you REALLY need to delete a document, you can use the following code 
    // (Comment out lines 73 and 74, and uncomment the two lines below)):
    // const deleteAuthor = await AuthorCollection.findByIdAndDelete(id);
    // res.status(200).json(deleteAuthor);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor}