import React from "react";
import '../styles/Info.css';

const CompanyInfo = () => {
    return (
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Dua Lab</h1>
        <p className="text-gray-600 mt-2">Somos una empresa, esclavos de Via Optima S.L.</p>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-700">Información de contacto</h2>
          <p className="text-gray-600">Correo: viaoptimadualab@gmail.com</p>
          <p className="text-gray-600">Teléfono: +34 </p>
          <p className="text-gray-600">Dirección: Calle Sao Paulo 6, Las Palmas de Gran Canaria, España</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Redes Sociales</h3>
          <p className="text-gray-600">Instagram: </p>
          <p className="text-gray-600">X: </p>

        </div>
      </div>
    );
  };
  
  export default CompanyInfo;
  