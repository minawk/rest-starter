module.exports = {
  patch: (data) => {
    const error = { ...data };
    switch (error.code) {
      case 11000:
        error.message = 'User or email already exist';
        break;
      default:
        error.message = error.errmsg;
    }
    return error;
  }
}