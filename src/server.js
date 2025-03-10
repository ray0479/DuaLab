import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Riosdelaluna7",
  database: "plan_formativo_dam",
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
  db.query("SELECT * FROM desarrollo_aplicaciones_multiplataforma", (err, results) => {
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

