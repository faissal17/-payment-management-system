const authMiddleware = (req, res, next) => {
  const userInfo = req.cookies.userInfo;

  if (userInfo) return next();

  res.redirect("/login");
};
module.exports = authMiddleware;
