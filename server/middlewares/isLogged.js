// isLogged.js
const isLogged = async (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    // The user is logged in, call the next middleware in the chain.
    next();
  } else {
    // The user is not logged in, send a 401 Unauthorized response.
    res.status(401).send("Unauthorized");
  }
};

module.exports = isLogged;
