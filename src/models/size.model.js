import mongoose, {Schema} from 'mongoose';

const SizeSchema = new Schema(
  {
    sizes: {
      type: Array,
      required: true,
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
const Size = mongoose.model('Size', SizeSchema);
export default Size;
