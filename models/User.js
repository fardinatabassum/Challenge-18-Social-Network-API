const { Schema, model } = require('mongoose');

// Schema to create User model

const studentSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      thoughts: {
    
      },
      friends: {
    
      },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  const Student = model('student', studentSchema);

module.exports = User;