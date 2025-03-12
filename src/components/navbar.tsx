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
                            <NavLink to='/' className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/info' className="nav-link">Proyectos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='/plan' className="nav-link">Plan Formativo</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to='/login' className="nav-link">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
