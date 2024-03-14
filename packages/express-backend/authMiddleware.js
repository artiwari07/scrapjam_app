import jwt from "jsonwebtoken";
import userServices from "./models/user-services.js";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
    if (err) return res.sendStatus(403);
    const dbUser = await userServices.findUserByName(user.username);
    if (dbUser) {
      req.user = dbUser[0];
      next();
    } else {
      res.sendStatus(404);
    }
  });
};

export default authenticateToken;
