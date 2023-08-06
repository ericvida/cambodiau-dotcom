import { CollectionConfig } from 'payload/types';

import { isAdmin, isAdminFieldLevel } from '../access/isAdmin';
import { isAdminOrSelf, isAdminOrSelfFieldLevel } from '../access/isAdminOrSelf';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['admin'], // TODO remove this after existing users have been updated to be admins, and make it public by default?
      required: true,
      access: {
        read: isAdminOrSelfFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        { value: 'editor', label: 'Editor' },
        { value: 'none', label: 'None' },
      ],
    },
  ],
};

export default Users;
