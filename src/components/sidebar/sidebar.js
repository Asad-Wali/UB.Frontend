import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
    return (

        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px", height: '100vh' }}>
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Admin Dashboard</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="#" className="nav-link active" aria-current="page">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="#" className="nav-link text-white">
                        Customers
                    </Link>
                </li>
            </ul>
            <hr />
        </div>

    )
}

export default Sidebar;