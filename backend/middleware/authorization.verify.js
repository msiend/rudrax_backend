const authorize = (requiredPermission) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    const userPermissions = roles[userRole];

    if (!userPermissions || !userPermissions.includes(requiredPermission)) {
      return res.status(403).json({ message: 'Access Denied' });
    }

    next();
  };
};
