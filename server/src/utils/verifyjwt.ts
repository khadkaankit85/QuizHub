import jwt from "jsonwebtoken";
function verifyJWT(token: string) {
  jwt.verify(token, "wrong-secret", function (err, decoded) {
    // err
    // decoded undefined
  });
}
