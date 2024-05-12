import express from "express";
const router = express.Router();
import { registering } from "@/controllers/jwtLogin";

router.post("/register", registering);

export default router;
