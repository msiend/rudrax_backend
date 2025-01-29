const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.roles) return res.sendStatus(401);
    const rolesArray = allowedRoles;
    const result = Array.isArray(req.roles)
      ? req.roles.some((role) => rolesArray.includes(role))
      : rolesArray.includes(req.roles);
    if (!result) return res.status(401).send({ status: false, msg: `Role ${req.roles} is invalid or Unauthorized!` });
    next();
  };
};

module.exports = verifyRoles;
