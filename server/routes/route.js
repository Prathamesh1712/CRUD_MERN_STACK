import express, {
    Router
} from "express";
import {
    addUser,
    getUsers,
    getUser,
    editUser,
    deleteUser
} from "../controller/user-con.js";





const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers)
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;