import express from "express";
const router = express.Router();
import { sendNotification } from "@/controllers/notification/Notification";

router.post("/notification", sendNotification);

export default router;
