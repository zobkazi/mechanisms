import express from "express";
import { requestByGoogle, authUserData } from "@/controllers/google";

const router = express.Router();

router.post("/google", requestByGoogle);

router.get("/google", authUserData);

export default router;
