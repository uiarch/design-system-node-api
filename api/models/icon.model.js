import mongoose, {Schema} from 'mongoose';

const IconSchema = new Schema(
  {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    tags: Array,
    versions: Array,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

// Export the model
const Icon = mongoose.model('Icons', IconSchema);
export default Icon;
