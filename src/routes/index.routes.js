import { Router } from "express";
import { addTask, deleteTask, editTask, renderIndex, toogleTask, updateTask } from "../controllers/task.controllers";

const router = Router();

//ROUTES
router.get("/", renderIndex);

router.post("/task/add", addTask);

router.get("/task/:id/edit", editTask);

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/task/:id/edit", updateTask);

router.get("/task/:id/delete", deleteTask);

router.get("/task/:id/toogleDone", toogleTask);

export default router;
