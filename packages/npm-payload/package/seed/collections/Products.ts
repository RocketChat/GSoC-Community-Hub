import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
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
      label: 'Products name',
    },
    {
      name: 'price',
      type: 'number',
      label: 'price',
    },
    {
      name: 'colors',
      type: 'relationship',
      label: 'Colors',
      relationTo: 'colors',
      hasMany: true,
    },
    {
      name: 'sizes',
      type: 'relationship',
      label: 'Sizes',
      relationTo: 'sizes',
      hasMany: true,
    },
  ],
  timestamps: false,
};

export default Products;
