const getLanguages = (db, image) => {
  return db('languages')
    .select('id', 'language', 'image')
}

module.exports = {
  getLanguages
}
