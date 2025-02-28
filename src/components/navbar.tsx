import { NavLink } from 'react-router';
import '../styles/NavBar.css'


export const NavBar = () => {
    //const [darkMode, setDarkMode] = useState(false);

    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="mb-0 h4">DuaLab</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mb-0 h5">
                            <NavLink to='/' className="nav-link active">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/info' className="nav-link active">Proyectos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
