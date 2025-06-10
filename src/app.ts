import * as express from "express";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import postRoutes from "./routes/post";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
export default app;
