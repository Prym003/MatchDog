const { Router } = require("express");
const router = Router();
const { getAllDogsOrName, getDogsById, createDbData } = require("../controller/Breed");


//all this routes start with '/dogs'

router.get("/", getAllDogsOrName);

router.get("/:id", getDogsById);

router.post("/create", createDbData);

module.exports = router;
