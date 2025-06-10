import { Request, Response } from "express";
import { createPost, getFeed, getUserPosts } from "../models/post";

export const create = async (req, res: Response) => {
  const userId = Number(req?.user?.id);
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { content, mediaUrl } = req.body;
  const post = await createPost(userId, content, mediaUrl);
  res.json(post);
};

export const feed = async (req, res: Response) => {
  const id = req?.user?.id;
  const posts = await getFeed(Number(id));
  res.json(posts);
};

export const getUserPostsController = async (req, res: Response) => {
  const id = req?.user?.id;
  const posts = await getUserPosts(Number(id));
  res.json(posts);
};
