const getAuthors = async (req, res) => {
  const authors = await db.query('SELECT * FROM users');
  return authors
}

const getAuthorById = async (req, res) => {
  const oneAuthor = await Authors.findById(req.params.id);
  return oneAuthor;
}


const postAuthor = (req, res) => {
  res.send('You POST requested to add one author');
}

const updateAuthor = (req, res) => {
  res.send('You PUT requested to modify an existing author');
}

const deleteAuthor = (req, res) => {
  res.send('You DELETE requested to remove one author');
}

module.exports = {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor}