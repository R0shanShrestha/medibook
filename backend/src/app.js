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
    origin: [
      "http://localhost:3000",
      "http://192.168.1.68:1235",
      "https://medibook-admin.vercel.app",
      "https://medibook-roshan.vercel.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

    credentials: true,
  })
);

app.use(cors());
app.use(express.json());

// Api endpoints
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Server</h1>");
});
app.get("/test", (req, res) => {
  res.send("WElcome to test");
});


app.use("/api/admin/", adminRouter);
app.use("/api/doctor/", doctorRoutes);
app.use("/api/user/", userRoutes);

export { app };
