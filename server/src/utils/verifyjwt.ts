import jwt from "jsonwebtoken";

interface payload {
  name?: string;
  email: string;
}

export function verifyJwt(token: string): payload | false {
  if (!process.env.JWT_SECRET) {
    return false;
  }
  if (!token) {
    return false;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as payload;
    return decoded;
  } catch (err) {
    console.log(err);
    return false;
  }
}
