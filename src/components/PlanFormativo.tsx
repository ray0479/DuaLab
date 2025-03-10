import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Bloque</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Descripción</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tareas a Realizar</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Ejemplos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.Bloque}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.Descripcion}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.Tareas_A_Realizar}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.Ejemplos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchMySQLData;

