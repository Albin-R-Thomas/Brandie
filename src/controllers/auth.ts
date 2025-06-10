import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import { createUser, findUserByUsername } from "../models/user";
import { Request, Response } from "express";

const SECRET = process.env.JWT_SECRET || "secret";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await createUser(username, hashed);
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await findUserByUsername(username);
  if (!user) return res.status(404).json({ error: "User not found" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid password" });
  const token = jwt.sign({ id: user.id }, SECRET);
  res.json({ token });
};
