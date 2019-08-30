const { UserModel } = require('../models');
const Error = require('../errors');
const controller = {}

controller.getAll = async (req, res) => {
  res.json(await UserModel.find({}));
}

controller.create = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await UserModel.createOne({ username, email });
    res.json(user);
  } catch (error) {
    res.status(400).json(Error(error));
  }
}

controller.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    res.status(400).json(Error(error));
  }
}

module.exports = controller