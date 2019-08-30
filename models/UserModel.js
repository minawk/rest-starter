const mongoose = require('mongoose');
const Joi = require('joi');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, minlength: 3, maxlength: 30 },
  email: { type: String, unique: true, required: true }
});

UserSchema.statics.getOne = async function (login) {
  const user = await this.findOne({ username: login });
  if (!user) user = await this.findOne({ email: login });
  return user;
}

UserSchema.statics.createOne = async function (user) {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
  });
  const result = await Joi.validate(user, schema);

  if (!result.error) {
    return await UserModel.create(user);
  } else {
    throw new Error(result.error);
  }
}


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;