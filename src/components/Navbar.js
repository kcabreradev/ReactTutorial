import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand me-4">Course Project</Link>
                <div className="me-auto">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-3">
                            <NavLink to="/users" className="nav-link" activeClassName="active">Users</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/counter" className="nav-link" activeClassName="active">Counter</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to="/news" className="nav-link" activeClassName="active">News</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}