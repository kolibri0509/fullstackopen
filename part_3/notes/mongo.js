const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/noteApp';

mongoose.set('strictQuery',false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })
  
  const Note = mongoose.model('Note', noteSchema)
  
//   const note = new Note({
//     content: 'Mongoose make thinks easy',
//     important: false,
//   })
  
//   note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
//   })

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
  
let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(url)
        .then((client)=>{
            console.log('Connected to MongoDb');
            dbConnection = client.db();
            return cb();
        })
        .catch((err)=>{
            return cb(err);
        })
    },
    getDb: ()=> dbConnection,
}