import * as express from "express";
import { create, feed, getUserPostsController } from "../controllers/post";
import { authenticate } from "../middlewares/auth";

const router = express.Router();
router.post("/", authenticate, create);
router.get("/feed", authenticate, feed);
router.get("/posts", authenticate, getUserPostsController);
export default router;
