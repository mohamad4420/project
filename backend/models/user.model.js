const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  accessToken: {
    type: String,
    required: true,
      minlength: 3
  },
  name: {
    type: String,
    required: true,
       minlength: 3
  },
  email: {
    type: String,
    required: true,
    minlength: 3
  },
  pic: {
    type: String,
    required: true,
    
  },
  social: {
    type: String,
    required: true,
      minlength: 3
  },
  continent: {
    type: String,
    required: true,
      minlength: 1
  },
  Country: {
    type: String,
    required: true,
      minlength: 1
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;