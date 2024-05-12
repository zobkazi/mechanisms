import express from "express";
const router = express.Router();
import { login } from "@/controllers/jwtLogin";

router.post("/login", login);

export default router;
