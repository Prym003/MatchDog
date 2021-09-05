const { Router } = require("express");
const router = Router();
const { getDbData } = require("../controller/Temperament");

//all this routes start with "/temperament"
router.get("/", getDbData);

module.exports = router;
