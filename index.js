const express = require('express');
const app = express();
const services = require('./services');
const cors = require('cors');
const morgan = require('morgan');

app.use(express.static('build'));
app.use(express.json());

const requestLogger = (request, response, next) => {
  console.log('Accessed date  : ', new Date().toLocaleString());
  console.log('Method         :', request.method);
  console.log('Path           :', request.path);
  console.log('Body           :', request.body);
  console.log('Status Code    :', response.statusCode);
  console.log('----------------------------------------');
  next();
};

app.use(requestLogger);

morgan.token('body', function (req) {
  return JSON.stringify(req.body);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(cors());
app.use('/', services);
app.use(morgan(':method :url :status :response-time ms :body'));
app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
