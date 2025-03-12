import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [isResetting, setIsResetting] = useState(false); // Estado para alternar recuperación de contraseña

  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    return /^(?=.*\d).{7,}$/.test(password);
  };

  // Iniciar sesión
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        setSuccess("Login exitoso");
        setError("");
        navigate("/");
      } else {
        setError(data.error || "Error al iniciar sesión");
        setSuccess("");
      }
    } catch {
      setError("Hubo un error al conectar con el servidor.");
      setSuccess("");
    }
  };

  // Registrar usuario
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 7 caracteres y 1 número.");
      setSuccess("");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
        setError("");
        setIsRegistering(false);
      } else {
        setError(data.error || "Error al registrar el usuario.");
        setSuccess("");
      }
    } catch {
      setError("Hubo un error al conectar con el servidor.");
      setSuccess("");
    }
  };

  // Recuperar contraseña
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Correo electrónico verificado. Ahora puedes restablecer tu contraseña.");
        setError("");
        setIsResetting(true); // Cambiar al formulario de restablecimiento de contraseña
      } else {
        setError(data.error || "Error en la recuperación.");
        setSuccess("");
      }
    } catch {
      setError("Error al conectar con el servidor.");
      setSuccess("");
    }
  };

  // Restablecer contraseña
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setError("La contraseña debe tener al menos 7 caracteres y 1 número.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Contraseña restablecida con éxito. Ahora puedes iniciar sesión.");
        setError("");
        navigate("/login"); // Redirigir al login después de éxito
      } else {
        setError(data.error || "Error al restablecer la contraseña.");
        setSuccess("");
      }
    } catch {
      setError("Error al conectar con el servidor.");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-lg shadow-lg p-6 bg-white w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isResetting ? "Restablecer Contraseña" : isRegistering ? "Registro" : "Inicio de sesión"}
        </h2>

        {!isResetting && !isRegistering && (
          <p className="text-gray-500 text-sm text-center mb-2">
            Consejo: la contraseña debe tener al menos 7 caracteres y 1 número.
          </p>
        )}

        <form
          onSubmit={isResetting ? handleResetPassword : isRegistering ? handleRegister : handleLogin}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
            required
          />

          {!isResetting && (
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 rounded-lg"
              required
            />
          )}

          {isResetting && (
            <>
              <input
                type="password"
                placeholder="Nueva contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg"
                required
              />
              <input
                type="password"
                placeholder="Confirmar nueva contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg"
                required
              />
            </>
          )}

          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}

          <button
            type="submit"
            className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
          >
            {isResetting ? "Restablecer contraseña" : isRegistering ? "Registrarse" : "Iniciar Sesión"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isResetting ? (
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setIsResetting(false)}
            >
              Volver al inicio de sesión
            </span>
          ) : isRegistering ? (
            <>
              ¿Ya tienes una cuenta?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setIsRegistering(false)}
              >
                Inicia sesión aquí
              </span>
            </>
          ) : (
            <>
              ¿No tienes una cuenta?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => setIsRegistering(true)}
              >
                Regístrate aquí
              </span>
            </>
          )}
        </p>

        {!isRegistering && !isResetting && (
          <p className="text-center text-gray-600 mt-4">
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setIsResetting(true)}
            >
              ¿Olvidaste tu contraseña?
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;