import React from 'react'
import { useNavigate ,Link} from 'react-router-dom';

const LogoutComponent = () => {

    const navigate = useNavigate();

    const logout = () => {
    localStorage.removeItem('token');
    localStorage.setItem("login",false);
    navigate("/login",{state:{auth:false}});
}
    return (
        <div>
            <ul>
              <li className="nav-item">
                <Link to="/logout" onClick={logout} className="nav-link">
                    <i className="bi bi-grid"></i><span>Logout</span>
                </Link> 
              </li>

            </ul>
        </div>
    )
}

export default LogoutComponent
