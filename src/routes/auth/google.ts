import express from "express";
import { googleAuthController } from "@/controllers/google";

const router = express.Router();

router.get("/auth/google", googleAuthController);

export default router;
