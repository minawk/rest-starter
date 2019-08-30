const MongoError = require('./MongoError')
const ValidationError = require('./ValidationError')

const Error = (error) => {
  switch (error.name) {
    case 'MongoError':
      error = MongoError.patch(error);
      break;
    case 'ValidationError':
      error = ValidationError.patch(error);
      break;
    default:
      error.message = JSON.stringify(error.message || error);
  }
  return error;
}

module.exports = Error;