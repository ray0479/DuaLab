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
  password: "1234",
  database: "duatabla",
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

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Verifica si el usuario existe en la base de datos
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) {
        console.error("Error al verificar usuario: ", err);
        return res.status(500).json({ error: "Error en el servidor" });
      }

      if (results.length > 0) {
        // Usuario encontrado y contraseña correcta
        return res.status(200).json({ message: "Inicio de sesión exitoso" });
      } else {
        // Usuario o contraseña incorrectos
        return res.status(401).json({ error: "Correo o contraseña incorrectos" });
      }
    }
  );
});


// Ruta para recuperar la contraseña
app.post("/api/forgot-password", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "El email es requerido." });
  }

  console.log("📩 Solicitando recuperación para el email:", email); // Verificar el email recibido

  // Consultar en la base de datos si el email existe
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("❌ Error al buscar el email:", err); // Log detallado del error
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (results.length === 0) {
      console.log(`❌ No se encontró el correo: ${email}`); // Verificar si el correo no existe
      return res.status(404).json({ error: "No existe una cuenta con este email." });
    }

    console.log(`✔️ El correo existe: ${email}`); // Verificar si el correo fue encontrado

    res.json({ message: "Email Confirmado" });
  });
});

// Ruta para restablecer la contraseña
app.post("/api/reset-password", (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ error: "El email y la nueva contraseña son requeridos." });
  }

  // Actualizar la contraseña en la base de datos
  db.query("UPDATE users SET password = ? WHERE email = ?", [newPassword, email], (err, results) => {
    if (err) {
      console.error("❌ Error al actualizar la contraseña:", err); // Log detallado del error
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (results.affectedRows === 0) {
      console.log(`❌ No se encontró el correo: ${email}`); // Verificar si el correo no existe
      return res.status(404).json({ error: "No existe una cuenta con este email." });
    }

    console.log(`✔️ Contraseña actualizada para el correo: ${email}`); // Verificar si la contraseña fue actualizada

    res.json({ message: "Contraseña restablecida con éxito" });
  });
});


app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  // Verificar si el usuario ya existe
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) {
      console.error("Error al consultar el usuario:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    // Insertar nuevo usuario en la base de datos
    db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err, results) => {
      if (err) {
        console.error("Error al registrar el usuario:", err);
        return res.status(500).json({ error: "Error al registrar el usuario" });
      }

      console.log("Usuario registrado con éxito:", results);
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

