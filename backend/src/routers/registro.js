const express = require("express");
	const router = express.Router();
	

	const mysqlConnection = require("../db/db");
	

	// Crear nueva cuenta
	router.post("/registro", (req, res) => {
	  const { nombre,apellido, correo, contrasena } = req.body;
	  mysqlConnection.query(
	    `INSERT INTO Usuario(nombre,apellido, correo, contraseña) VALUES(${nombre}, ${apellido}, ${correo}, ${contrasena})`,
	    (err, results, fields) => {
	      if (err) {
	        return console.error(err.message);
	      }
	      res.json({ message: `¡Registro exitoso!` });
	    }
	  );
	});
	

	module.exports = router;
