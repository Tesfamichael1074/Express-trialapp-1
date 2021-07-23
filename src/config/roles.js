const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers', 'Category'],
  superAdmin: ['getUsers', 'manageUsers', 'Category']
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
