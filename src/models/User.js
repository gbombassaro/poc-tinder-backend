const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  interests: {
    type: Array,
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
}, {
  timestamps: true
});

module.exports = model('User', UserSchema);