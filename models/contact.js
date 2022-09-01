require('dotenv').config();

const mongoose = require('mongoose');

const url = `mongodb+srv://phonebook-admin:${process.env.MONGODB_DBS_PASSWORD}@cluster0.o8ijugp.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then((result) => {
    console.log(`connected to ${result.connection.name} in MongoDB`);
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

contactSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Contact', contactSchema);
