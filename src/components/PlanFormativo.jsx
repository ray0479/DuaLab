//Datos extraidos del MySQL del plan formativo

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const PlanFormativo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulación de datos extraídos de la base de datos
    const fetchData = async () => {
      const fakeData = [
        { Bloque: "A", Descripcion: "Gestión de equipos y sistemas", Tareas: "Opera entornos de desarrollo.", Ejemplos: "Instalación y configuración de sistemas operativos para desarrollo" },
        { Bloque: "B", Descripcion: "Diseño y manejo de bases de datos", Tareas: "Diseño lógico de bases de datos.", Ejemplos: "Diseño de una base de datos para una aplicación de gestión de clientes" },
        { Bloque: "C", Descripcion: "Desarrollo y despliegue de juegos", Tareas: "Desarrollo de juegos y aplicaciones de entretenimiento.", Ejemplos: "Creación de un juego de preguntas y respuestas" },
        { Bloque: "D", Descripcion: "Desarrollo y pruebas de interfaz de aplicaciones multiplataforma", Tareas: "Aplicaciones en red.", Ejemplos: "Desarrollo de una interfaz responsiva para una app de geolocalización" }
      ];
      setData(fakeData);
    };

    fetchData();
  }, []);

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Datos de Desarrollo de Aplicaciones Multiplataforma</h2>
        <Table>
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
                <td>{item.Tareas}</td>
                <td>{item.Ejemplos}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PlanFormativo;