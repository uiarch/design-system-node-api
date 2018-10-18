import mongoose, {Schema} from 'mongoose';

const ColorSchema = new Schema(
  {
    colors: {
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
const Color = mongoose.model('Color', ColorSchema);
export default Color;
