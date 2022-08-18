const { Router } = require("express");
const { Op } = require("Sequelize");
const { Empleado, Departamento } = require("../db.js");

const { Sequelize } = require("sequelize");

const {
  addEmpleado,
  getCodigoEmpleado,
  getEmpleados,
  updateEmpleado,
  deleteEmpleado,
} = require("../controllers");

const router = Router();

router.get("/", getEmpleados);

router.get("/:codigo", getCodigoEmpleado);

router.post("/", addEmpleado);

router.put("/:codigo", updateEmpleado);

router.delete("/:codigo", deleteEmpleado);

module.exports = router;
