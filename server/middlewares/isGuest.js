// isGuest.js
const isGuest = async (req, res, next) => {
  if (!req.user) {
    // The user is a guest, call the next middleware in the chain.
    next();
  } else {
    // The user is not a guest, send a 403 Forbidden response.
    res.status(403).send("Forbidden");
  }
};

module.exports = isGuest;
