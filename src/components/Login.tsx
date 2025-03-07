import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const validatePassword = (password: string) => {
    return /^(?=.*\d).{7,}$/.test(password); //Requisitos de la contraseña
  };

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    
    const existingUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null; //Guardar datos en local

    if (existingUser && existingUser.email === email) { //Comprueba si se ha usado el correo anteriormente
      setError("Error, este correo ya está registrado");
      setSuccess("");
      return;
    }
    
    if (!validatePassword(password)) {
      setError("Error, la contraseña debe tener al menos 7 caracteres y 1 número");//Si la contraseña no cumple los requisitos, sale este mensaje
      setSuccess("");
      return;
    }
    
    setError("");
    setSuccess("Login successful!"); //Logueo correctamente
    
    // Guardar los datos en localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    
    console.log("Email:", email, "Password:", password);

    // Redirigir a la página de inicio después de un login exitoso
    navigate("/"); // Asegúrate de que "/home" sea la ruta de tu página de inicio
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="rounded-lg shadow-lg p-6 bg-white w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-gray-500 text-sm text-center mb-2">
          Consejo: la contraseña debe tener al menos 7 caracteres y 1 número
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              placeholder="Password"
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
              Login
            </button>
          </div>
        </form>
        {success && <p className="text-green-600 text-center mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default Login;
      