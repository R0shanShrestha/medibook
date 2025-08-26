import express from "express";
import cors from "cors";
import adminRouter from "./routes/admin.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cors());
app.use(express.json());

// API endpoints
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Server</h1>");
});
app.get("/test", (req, res) => {
  res.send("Welcome to test");
});

app.use("/api/admin/", adminRouter);
app.use("/api/doctor/", doctorRoutes);
app.use("/api/user/", userRoutes);

export default app;
