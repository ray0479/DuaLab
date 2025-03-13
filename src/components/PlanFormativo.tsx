import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/Tabla.css';

interface Data {
  Bloque: string;
  Descripcion: string;
  Tareas_A_Realizar: string;
  Ejemplos: string;
}

const FetchMySQLData: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al obtener datos");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Bloque</th>
            <th>Descripción</th>
            <th>Tareas a Realizar</th>
            <th>Ejemplos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Bloque}</td>
              <td>{item.Descripcion}</td>
              <td>{item.Tareas_A_Realizar}</td>
              <td>{item.Ejemplos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchMySQLData;

