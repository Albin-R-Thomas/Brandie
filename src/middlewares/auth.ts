import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "secret";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "No token" });
  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, SECRET);
    (req as any).user = payload;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};
