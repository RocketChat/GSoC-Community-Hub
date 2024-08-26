import type { GlobalConfig } from 'payload'


export const p2pSchema: GlobalConfig = {
  slug: 'navbar',
  access: {
    read: () => true,
  },
  fields: [],
}