import '../styles/Footer.css'

/*export const Footer = () => {
  return (
    <footer className="w-100 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Contacto</h5>
            <p>Email: viaoptimadualab@gmail.com</p>
            <p>Teléfono:+34</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Dirección</h5>
            <p>Calle Sao Paulo, 6</p>
            <p>Las Palmas de Gran Canaria, España</p>
          </div>
        </div>
      </div>
    </footer>
  )
}*/

import '../styles/Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 d-flex flex-column text-center">
      <div className="containers text-center">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>Contacto</h5>
            <p><FaEnvelope className="icon" /> viaoptimadualab@gmail.com</p>
            <p><FaPhone className="icon" />+34 691 01 19 93</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Dirección</h5>
            <p><FaMapMarkerAlt className="icon" /> Calle Sao Paulo, 6. Las Palmas de Gran Canaria, España</p>
          </div>
        </div>
        {/* El mensaje de copyright está aquí, debajo de los elementos de contacto */}
        <p className="text-muted">&copy; {new Date().getFullYear()} Via Optima Dualab. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

//<p>Las Palmas de Gran Canaria, España</p>
