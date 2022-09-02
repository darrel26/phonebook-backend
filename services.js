const express = require('express');
const app = express();
const router = express.Router();
const Persons = require('./models/contact').default;

app.use(express.json());

router.get('/api/persons', (request, response) => {
	Persons.find({}).then((person) => {
		response.json(person);
	});
});

router.get('/api/persons/:id', (request, response, next) => {
	Persons.findById(request.params.id)
		.then((note) => {
			if (note) {
				response.json(note);
			} else {
				response.status(404).end();
			}
		})
		.catch((error) => next(error));
});

router.get('/info', async (request, response) => {
	const phoneBookLength = await Persons.find({}).then(
		(person) => person.length
	);
	const body = `<p>Phonebook has info for ${phoneBookLength} people</p><p>${new Date()}</p>`;

	response.send(body);
});

router.post('/api/persons', (request, response, next) => {
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

	person
		.save()
		.then((savedPerson) => {
			response.json(savedPerson);
		})
		.catch((error) => next(error));
});

router.put('/api/persons/:id', (request, response, next) => {
	const { name, number } = request.body;

	return Persons.findByIdAndUpdate(
		request.params.id,
		{ name, number },
		{
			new: true,
			runValidators: true,
			context: 'query',
		}
	)
		.then((updatedPerson) => response.json(updatedPerson))
		.catch((error) => next(error));
});

router.delete('/api/persons/:id', (request, response, next) => {
	return Persons.findByIdAndRemove(request.params.id)
		.then(() => response.status(204).end())
		.catch((error) => next(error));
});

module.exports = router;
