const verifyJwt = require('@/middleware/verifyJWT')
const authorize = require('@/middleware/verifyRoles')
const ROLES_LIST = require('@/config/roles_list')

const middlewareMappings = {
  entity: {
    projectController: {
      findAll: [verifyJwt,authorize(ROLES_LIST.SuperAdmin,ROLES_LIST.Branch)],
      create: [verifyJwt,authorize(ROLES_LIST.SuperAdmin,ROLES_LIST.Branch)],
      update: [authorize(ROLES_LIST.SuperAdmin,ROLES_LIST.Branch)],
    },
  },
};

module.exports = middlewareMappings;
