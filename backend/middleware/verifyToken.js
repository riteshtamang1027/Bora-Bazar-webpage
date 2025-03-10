import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const pureToken = authHeader.split(" ")[1];
  if (!pureToken) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  jwt.verify(pureToken, "This_is_my_secret_key", function (err, decoded) {
    console.log(decoded); // bar
    if (err) {
      return res.status(401).json({
        message: "Token found but token invailde",
      });
    }
    console.log(decoded, "This is decoded");
    next();
  });
};
