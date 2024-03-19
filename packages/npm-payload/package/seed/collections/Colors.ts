import { CollectionConfig } from 'payload/types';

const Colors: CollectionConfig = {
  slug: 'colors',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Color name',
    },
  ],
  timestamps: false,
};

export default Colors;
