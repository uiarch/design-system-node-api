import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Email is required!'],
    },
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'User name is required!'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      minlength: [6, 'Password needs to be longer!'],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

// Export the model
const User = mongoose.model('Users', UserSchema);
export default User;
