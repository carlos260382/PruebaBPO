const { addDepartamento, getDepartamento } = require("../controllers");

const { Router } = require("express");

const router = Router();

router.post("/", addDepartamento);
router.get("/", getDepartamento);

module.exports = router;
