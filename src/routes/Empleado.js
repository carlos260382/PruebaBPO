const { Router } = require("express");
const { Op } = require("Sequelize");
const { Empleado, Departamento } = require("../db.js");

const { Sequelize } = require("sequelize");

const {
  addEmpleado,
  getCodigoEmpleado,
  getEmpleados,
} = require("../controllers");

const router = Router();

router.get("/", getEmpleados);

router.get("/:codigo", getCodigoEmpleado);

router.post("/", addEmpleado);

module.exports = router;
