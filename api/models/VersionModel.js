import mongoose, {Schema} from 'mongoose';

const VersionSchema = new Schema(
  {
    versions: {
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
const Version = mongoose.model('Versions', VersionSchema);
export default Version;
