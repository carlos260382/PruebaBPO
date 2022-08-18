### DESARROLLO PRUEBA TECNICA
API conectada a base de datos con postgreSQL, indicaciones para levantar el proyecto:
URL del repositorio en githab : https://github.com/carlos260382/PruebaBPO

1)	Con el comando “npm install” instala las dependencias
2)	Recuerde tener instalado postgreSQL en su ordenador; y crear la base de datos que para el presente ejemplo se llamara “cobrandoBPO” (importante en postgreSQL debemos crear primero la base de datos para que pueda tener conexión con nuestra API)
3)	Con el comando “npm run start:dev” inicia el proyecto ideal para entorno de desarrollo ya que cuenta con nodemon configurado para que el servidor escuche los cambios automáticamente.
4)	Con el comando “npm start” inicia el proyecto sin nodemon.

Configuración Variables de Entorno: crear un archivo .env con la siguiente información

5)	DB_USER=postgres
6)	DB_PASSWORD=postgres
7)	DB_HOST=localhost

## Los endpoint creados son los siguientes:

### http://localhost:1234/empleado    y   http://localhost:1234/departamento 

1)	Para mostrar todos los empleados:
Método get al  http://localhost:1234/empleado

2)	Para obtener un empleado por código:
Método get al  http://localhost:1234/empleado/:código

3)	Para ingresar empleado:
Método post al  http://localhost:1234/empleado

4)	Para modificar información de un empleado:
Método put al  http://localhost:1234/empleado/:codigo

5)	Para borrar el registro de un empleado:
Método delete al  http://localhost:1234/empleado/:codigo

6)	Para mostrar todos los departamentos:
Método get al  http://localhost:1234/departamentos

7)	Para registrar un departamento:
Método post al  http://localhost:1234/departamento


