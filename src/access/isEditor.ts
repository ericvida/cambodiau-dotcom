import type { Access, FieldAccess } from 'payload/types';

import type { User } from '../payload-types';

/**
 * Return true if the user has an editor or admin role
 * @param user User
 * @returns bollean
 */
export const isEditorOrAdmin = (user: User): boolean =>
  Boolean(user?.roles?.includes('admin')) || Boolean(user?.roles?.includes('editor'));

export const isEditor: Access<User> = ({ req: { user } }) => {
  return isEditorOrAdmin(user);
};

export const isEditorFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return isEditorOrAdmin(user);
};
