// Since we will have no html/front end to test our API, we will rely on Postman or Insomnia to
// test our CRUD operations and see if our backend is responding as expected.

// Firstly we need to import our Author collection from our models
const AuthorCollection = require('../models/authorModel');

// Given our database queries can take a little to complete, we will use async/await to handle them
const getAuthors = async (req, res) => {
  // With async/await, we use try/catch to handle errors
  try {
    // Then we can query our database! This function is meant to return all authors in the database
    const authors = await AuthorCollection.find();
    // And we return to our client the query in JSON format.
    res.status(200).json(authors);
  } catch (error) {
    // If there is an error, we will send a 500 status code and the error's message to the client
    res.status(500).send(error.message)
  }
}

const getAuthorById = async (req, res) => {

}


const postAuthor = (req, res) => {

}

const updateAuthor = (req, res) => {

}

const deleteAuthor = (req, res) => {

}

module.exports = {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor}