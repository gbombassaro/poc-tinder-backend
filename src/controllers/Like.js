const User = require('../models/User');

module.exports = {
  async store(req, res) {

    const activeUser = req.headers.user;
    const likedUser = req.params.userId;

    const loggedUser = await User.findById(activeUser);
    const targetUser = await User.findById(likedUser);

    console.log(loggedUser);
    console.log(targetUser);

    if (!targetUser) {
      return res.status(400).json({error: 'User not exists'});
    }

    if (targetUser.likes.includes(loggedUser._id)) {
      console.log('match');
    }

    //SAVE LIKE IN DATABASE
    loggedUser.likes.push(targetUser._id);
    await loggedUser.save();

    return res.json(loggedUser);
  }
}