import { useEffect, useState } from "react";
import axios from "axios";

interface DataRow {
  id: number;
  Empresa: string;
  Dirección: string;
  Teléfono: string;
  Correoelectrónico: string;
}

export const TablaEmpresas = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data") // Asegúrate de que esta URL es la correcta para tu backend
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al cargar los datos.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Direccion</th>
              <th className="border px-4 py-2">Telefono</th>
              <th className="border px-4 py-2">Correo electronico</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{row.id}</td>
                <td className="border px-4 py-2">{row.Empresa}</td>
                <td className="border px-4 py-2">{row.Dirección}</td>
                <td className="border px-4 py-2">{row.Teléfono}</td>
                <td className="border px-4 py-2">{row.Correoelectrónico}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

