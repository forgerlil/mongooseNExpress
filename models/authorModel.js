// Mongoose, being an ODM, means we can structure our documents with the use of a Schema!
// This is a great way to ensure that our documents are structured in a consistent way, so that our
// queries are predictable and our data is clean and efficient.

// For that we need to require mongoose, but we can go ahead and destructure it to only get what we need
// for making a Schema, the 'Schema' class, and the model method.
const {Schema, model} = require('mongoose');

// We then proceed to create a Schema, and pass it an object with the fields we want to have in our
// documents. We can also specify the type of each field, and even add some validation to it.

const authorSchema = new Schema({
  firstName: String,
  // We can also pass an object to the field, and specify data type, add constraints, defaults and validation to it.
  lastName: {
    type: String,
    required: true,
    unique: true,
    match: /[A-Za-z]/,
    minlength: 3,
    maxlength: 20,
    default: ''
  },
  dateOfBirth: Date
})

// Finally, we export the model, pass the name (singular) of the collection we want to use (you will see that in Mongo the
// collection will be pluralized), and the Schema we just created.
module.exports = model('Author', authorSchema);