const express = require('express');
const app = express();
const router = express.Router();
const Persons = require('./models/contact');

app.use(express.json());

router.use((req, res, next) => {
  console.log('Accessed date: ', new Date().toLocaleString());
  console.log('Method :', req.method);
  console.log('Status Code :', res.statusCode);
  next();
});

router.get('/api/persons', (request, response) => {
  Persons.find({}).then((person) => {
    response.json(person);
  });
});

router.get('/api/persons/:id', (request, response) => {
  Persons.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error.message);
      response.status(400).send({ error: 'malformatted id' });
    });
});

router.get('/info', async (request, response) => {
  const phoneBookLength = await Persons.find({}).then(
    (person) => person.length
  );
  const body = `<p>Phonebook has info for ${phoneBookLength} people</p><p>${new Date()}</p>`;

  response.send(body);
});

router.post('/api/persons', (request, response) => {
  const body = request.body;

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' });
  }

  if (!body.name) {
    return response.status(400).json({
      error: 'please enter contact name',
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: 'please enter contact number',
    });
  }

  const person = new Persons({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

router.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  return Persons.findOneAndDelete({ _id: id }).then((person) =>
    response.json(person)
  );
});

module.exports = router;
