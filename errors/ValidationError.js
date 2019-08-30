module.exports = {
  patch: (data) => {
    const error = { ...data };
    if (!error.message) {
      error.message = '';
      error.details.forEach(detail => {
        const message = detail.message + '\n';
        error.message += message;
      });
    }
    return error;
  }
}