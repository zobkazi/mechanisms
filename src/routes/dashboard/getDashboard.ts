import express from "express";
const router = express.Router();
import { authDashboard, dashboard } from "@/controllers/dashboard";
import authMiddleware from "@/middleware/authMiddleware";

router.post("/dashboard", authMiddleware, authDashboard);

router.get("/dashboard", authMiddleware, dashboard);

export default router;
