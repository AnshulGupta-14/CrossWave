import express from "express";
const router = express.Router();

import { getOrCreateChat , sendMessage , getAllChats , getChat } from "../controllers/Chat.js";

// API to send a message
router.post("/get-or-create-chat" , getOrCreateChat);
router.post("/send-message", sendMessage);
router.get("/get-all-chats", getAllChats);
router.get("/get-chat/:chatId", getChat);


export default router;
