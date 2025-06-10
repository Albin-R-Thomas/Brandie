import { Response } from "express";
import {
  followUser,
  unfollowUser,
  getFollowers,
  getFollowing,
} from "../models/follow";

export const follow = async (req, res: Response) => {
  const id = Number(req?.user?.id);
  const { targetId } = req.params;
  const follow = await followUser(Number(id), Number(targetId));
  res.json(follow);
};

export const unfollow = async (req, res: Response) => {
  const id = Number(req?.user?.id);
  const { targetId } = req.params;
  const unfollow = await unfollowUser(Number(id), Number(targetId));
  res.json(unfollow);
};

export const getFollowersList = async (req, res: Response) => {
  const id = Number(req?.user?.id);

  const followers = await getFollowers(Number(id));
  res.json(followers);
};

export const getFollowingList = async (req, res: Response) => {
  const id = Number(req?.user?.id);

  const following = await getFollowing(Number(id));
  res.json(following);
};
