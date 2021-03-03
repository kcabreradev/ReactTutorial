import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand me-4">Course Project</Link>
                <div className="me-auto">
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-3">
                            <Link to="/users" className="nav-link" activeClassName="active">Users</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/counter" className="nav-link" activeClassName="active">Counter</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/news" className="nav-link" activeClassName="active">News</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}