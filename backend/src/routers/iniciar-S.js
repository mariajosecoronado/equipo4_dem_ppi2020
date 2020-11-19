const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

// Iniciar sesión en Cook to work
router.post("/iniciar-S", (req, res) => {
  const { correo, contrasena } = req.body;
  mysqlConnection.query(
    `SELECT * FROM Usuarios WHERE Correo='${correo} AND Contrasena='${contrasena};'`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ message: "¡Bienvenido a la experiencia COOK TO WORK!" });
      } else {
        res.json({
          message: "¡Correo y/o contraseña incorrectos! Intenta nuevamente"
        });
      }
    }
  );
});

module.exports = router;
