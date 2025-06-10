import * as express from "express";
import {
  follow,
  unfollow,
  getFollowersList,
  getFollowingList,
} from "../controllers/user";
import { authenticate } from "../middlewares/auth";

const router = express.Router();
router.post("/follow/:targetId", authenticate, follow);
router.delete("/unfollow/:targetId", authenticate, unfollow);
router.get("/followers", authenticate, getFollowersList);
router.get("/following", authenticate, getFollowingList);
export default router;
