import express from "express";
import { createSkills, getSkills, deleteSkills, updateSkills } from "../../controllers/skillControllers/index.js";

const router = express.Router();

router.post("/create", createSkills);
router.get("/get", getSkills);
router.delete("/delete/:id", deleteSkills);
router.put("/update/:id", updateSkills);

export default router