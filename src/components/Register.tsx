import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    return /^(?=.*\d).{7,}$/.test(password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 7 caracteres y 1 número.");
      return;
    }

    // Realizar solicitud al servidor para registrar al usuario
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si el registro es exitoso, redirigir al login
        setError("");
        navigate("/login");
      } else {
        setError(data.error); // Mostrar error del servidor
      }
    } catch (error) {
      setError("Hubo un error al conectar con el servidor.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-lg shadow-lg p-6 bg-white w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
          <button type="submit" className="bg-black text-white p-2 rounded-lg">
            Registrarse
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          ¿Ya tienes una cuenta?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

