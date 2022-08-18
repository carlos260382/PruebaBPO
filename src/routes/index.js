const { Router } = require("express");

const Empleado = require("./Empleado.js");
const Departamento = require("./Departamento.js");

const router = Router();

// Configurar los routers
router.use("/empleado", Empleado);
router.use("/departamento", Departamento);

module.exports = router;
