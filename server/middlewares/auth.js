const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // Get the JWT from the request headers
  const jwtToken = req.headers.authorization;
  // console.log(req.headers);
  try {
    // Decode the JWT using the secret key
    const user = jwt.verify(jwtToken, process.env.JWT_SECRET_AUTH);

    // Set the decoded user object on the request object
    req.user = user;
  } catch (err) {
    // Handle errors, such as if the JWT is invalid or expired
    console.error(err);
  }

  next();
};

module.exports = auth;
