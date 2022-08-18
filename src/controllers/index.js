const { Empleado, Departamento } = require("../db");

async function getEmpleados(req, res) {
  try {
    const empleados = await Empleado.findAll();

    res.status(200).send(empleados);
  } catch (error) {
    res.status(400).send(`Se produjo el siguiente error ${error}`);
  }
}

async function getDepartamento(req, res) {
  try {
    const departamento = await Departamento.findAll();
    res.status(200).send(departamento);
  } catch (error) {
    res.status(400).send(`Se produjo el siguiente error ${error}`);
  }
}

async function addDepartamento(req, res, next) {
  const { codigo, nombre, presupuesto } = req.body;
  try {
    const newDepartamento = await Departamento.create({
      codigo,
      nombre,
      presupuesto,
    });
    res
      .status(200)
      .send({ message: " departamento registrado con exito", newDepartamento });
  } catch (error) {
    next(error);
    res.send(`Se produjo el siguiente error ${error}`);
  }
}

async function addEmpleado(req, res, next) {
  const { id, codigo, nif, nombre, apellido1, apellido2, codigo_departamento } =
    req.body;
  try {
    const newEmpleado = await Empleado.create({
      codigo,
      nif,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento,
    });
    // let departamento = await Departamento.findAll({
    //   where: {
    //     codigo: codigo_departamento,
    //   },
    // });
    // newEmpleado.addDepartamento(departamento);
    res.send(" Empleado registrado con exito");
  } catch (error) {
    next(error);
    console.log(`Se produjo el siguiente error ${error}`);
  }
}

async function getCodigoEmpleado(req, res, next) {
  try {
    const { codigo } = req.params;
    console.log("este es codigo", codigo);
    const detailEmpleado = await Empleado.findByPk(codigo.toUpperCase());
    return res.status(200).send(detailEmpleado);
  } catch (error) {
    res.status(404).send("Empleado detail not found");
  }
}

async function updateEmpleado(req, res) {
  const { codigo } = req.params;
  if (codigo) {
    const body = req.body;
    Empleado.update(body, {
      where: {
        codigo,
      },
    })
      .then(() => {
        res.send("Modificado correctamente");
      })
      .catch((error) => next(error));
  }
}

async function deleteEmpleado(req, res) {
  const { codigo } = req.params;
  if (codigo) {
    Empleado.destroy({ where: { codigo } })
      .then(() => {
        res.send("Eliminado correctamente");
      })
      .catch((error) => res.status(400).send(error));
  }
}

module.exports = {
  addEmpleado,
  getDepartamento,
  addDepartamento,
  getCodigoEmpleado,
  getEmpleados,
  updateEmpleado,
  deleteEmpleado,
};
