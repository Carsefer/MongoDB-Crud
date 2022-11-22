import { Router } from "express";
import {
  renderTask,
  createTask,
  renderTaskEdit,
  updateTaskEdit,
  deleteTask,
  toggleTask,
} from "../controllers/index.controller";
const router = Router();

router.get("/", renderTask);
router.post("/tasks/add", createTask);
router.get("/tasks/:id/toggleDone", toggleTask);
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit", updateTaskEdit);
router.get("/tasks/:id/delete", deleteTask);
export default router;
