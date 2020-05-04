const UserModel = require('../models/User');

module.exports = {
  async index(req, res) {
    const {user} =  req.headers;
    const loggedUser = await UserModel.findById(user);
    const indexedUsers = await UserModel.find({
      $and: [
        {_id: {$ne: user}},
        {_id: {$nin: loggedUser.likes}},
        {_id: {$nin: loggedUser.dislikes}},
      ],
    })
    return res.json(indexedUsers);
  },

  async store(req, res) {
    const alreadyExists = await UserModel.findOne({name: req.body.name});

    if (alreadyExists) return res.json(alreadyExists);

    const FEPayload = {...req.body};
    const UserPayload = await UserModel.create(FEPayload);
    return res.json(UserPayload);
  }
}