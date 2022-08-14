const checkAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  // console.log('user in check ');
  return next();
};

module.exports = checkAuth;
