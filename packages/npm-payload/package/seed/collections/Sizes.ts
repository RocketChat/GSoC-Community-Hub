import { CollectionConfig } from 'payload/types';

const Sizes: CollectionConfig = {
  slug: 'sizes',
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
      label: 'Size name',
    },
  ],
  timestamps: false,
};

export default Sizes;
