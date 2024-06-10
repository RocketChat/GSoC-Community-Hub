import { CollectionConfig } from 'payload/types';

const Navbar: CollectionConfig = {
  slug: 'navbar',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'first',
      type: 'text',
      label: 'Option 1',
    },
    {
      name: 'second',
      type: 'text',
      label: 'Option 2',
    },
  ],
  timestamps: true,
};

export default Navbar;
