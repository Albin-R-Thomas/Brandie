import prisma from "../config/prisma";

export const followUser = async (followerId: number, followingId: number) => {
  return prisma.follows.create({ data: { followerId, followingId } });
};

export const unfollowUser = async (followerId: number, followingId: number) => {
  return prisma.follows.delete({
    where: { followerId_followingId: { followerId, followingId } },
  });
};

export const getFollowers = async (userId: number) => {
  return prisma.follows.findMany({
    where: { followingId: userId },
    include: { follower: true },
  });
};

export const getFollowing = async (userId: number) => {
  return prisma.follows.findMany({
    where: { followerId: userId },
    include: { following: true },
  });
};
