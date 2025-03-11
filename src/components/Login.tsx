import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login y registro

  const navigate = useNavigate(); // Inicializa el hook useNavigate

  // Validación de contraseña
  const validatePassword = (password: string) => {
    return /^(?=.*\d).{7,}$/.test(password); // Requisitos de la contraseña
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);  // Guardar token JWT
        setSuccess("Login exitoso");
        setError("");
        navigate("/");  // Redirigir a la página principal
      } else {
        setError(data.error || "Error al iniciar sesión");
        setSuccess("");
      }
    } catch (err) {
      setError("Hubo un error al conectar con el servidor.");
      setSuccess("");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 7 caracteres y 1 número.");
      setSuccess("");
      return;
    }

    const registerData = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
        setError("");
        setIsRegistering(false);  // Regresar al formulario de inicio de sesión
      } else {
        setError(data.error || "Error al registrar el usuario.");
        setSuccess("");
      }
    } catch (err) {
      setError("Hubo un error al conectar con el servidor.");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-lg shadow-lg p-6 bg-white w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isRegistering ? "Registro" : "Inicio de sesión"}
        </h2>
        <q className="text-gray-500 text-sm text-center mb-2">
          Consejo: la contraseña debe tener al menos 7 caracteres y 1 número
        </q>

        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
            {error && <p className="text-red-600 text-center">{error}</p>}
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
            >
              {isRegistering ? "Registrarse" : "Iniciar Sesión"}
            </button>
          </div>
        </form>

        {success && <p className="text-green-600 text-center mt-4">{success}</p>}

        <p className="text-center text-gray-600 mt-4">
          {isRegistering
            ? "¿Ya tienes una cuenta? "
            : "¿No tienes una cuenta? "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}  // Cambia entre login y registro
          >
            {isRegistering ? "Inicia sesión aquí" : "Regístrate aquí"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

      