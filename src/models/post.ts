import prisma from "../config/prisma";

export const createPost = async (
  userId: number,
  content: string,
  mediaUrl?: string
) => {
  return prisma.post.create({ data: { userId, content, mediaUrl } });
};

export const getUserPosts = async (userId: number) => {
  return prisma.post.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

export const getFeed = async (userId: number) => {
  const following = await prisma.follows.findMany({
    where: { followerId: userId },
  });
  const followingIds = following.map((f) => f.followingId);
  if (followingIds.length === 0) {
    // If not following anyone, show posts from all *other* users
    return prisma.post.findMany({
      where: { userId: { not: userId } },
      orderBy: { createdAt: "desc" },
    });
  }
  return prisma.post.findMany({
    where: { userId: { in: [...followingIds, userId] } },
    orderBy: { createdAt: "desc" },
  });
};
