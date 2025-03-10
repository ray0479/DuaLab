const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3306;

app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Cambia esto según tu configuración
  password: "", // Cambia esto según tu configuración
  database: "plan_formativo_dam", // Asegúrate de importar el archivo SQL en MySQL
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL: ", err);
    return;
  }
  console.log("Conectado a MySQL");
});

// Ruta para obtener los datos
app.get("/api/data", (req, res) => {
  db.query("SELECT * FROM nombre_de_tu_tabla", (err, results) => {
    if (err) {
      console.error("Error al obtener datos: ", err);
      res.status(500).send("Error en el servidor");
    } else {
      res.json(results);
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
