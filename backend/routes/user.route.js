import express from 'express';
import { getUser, createUser, updateUser } from '../controller/user.controller.js';

const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;

