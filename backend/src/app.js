import express from "express";
import cors from "cors";
import adminRouter from "./routes/Admin.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import userRoutes from "./routes/user.routes.js";

// initilization
const app = express();

// Middlewares

app.use(
  cors({
    origin: ["http://192.168.1.68:1235", "http://192.168.1.68:1236"],
  })
);
app.use(cors());
app.use(express.json());

// Api endpoints
app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.use("/api/admin/", adminRouter);
app.use("/api/doctor/", doctorRoutes);
app.use("/api/user/", userRoutes);

export { app };
