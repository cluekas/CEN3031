//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://user123:password1234@cluster0-ipvd0.mongodb.net/test?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: 'a2e1c8fd54b645699ce789b8b47f18a4' 
  },
  port: 8080
};