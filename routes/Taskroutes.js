const { Router } = require("express");
const { getTask, saveToDo, updateToDo, deleteToDo } = require("../controllers/Taskcontroller");

// const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/", getTask);

router.post("/save", saveToDo);

router.put("/update", updateToDo);

router.post("/delete", deleteToDo);


module.exports = router;