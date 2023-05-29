const express = require("express")
const router = express.Router()
const specific_task = require("../controller/people_controller")

router.route("/").get(specific_task.getALLTask)
router.route("/").post(specific_task.createTask)
router.route("/:id").get(specific_task.getTask)
router.route("/:id").patch(specific_task.updateTask)
router.route("/:id").delete(specific_task.deleteTask)




module.exports = router