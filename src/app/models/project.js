const mongoose =require('../../dataBase');
const bcrypt = require('bcryptjs')

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description:{
    type: String,
    require: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    require: true,
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task',
  }],
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;