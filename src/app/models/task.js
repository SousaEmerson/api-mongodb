const mongoose =require('../../dataBase');
const bcrypt = require('bcryptjs')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    require: true,
    completed: {
  type: Boolean,
  require: true,
  default: false,
    },
  },
    createdId: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;