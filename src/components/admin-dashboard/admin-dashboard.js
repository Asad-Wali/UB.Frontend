import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Table from "../table/table";

const AdminDashboard = () => {
    
    return (
        <>
            <Navbar />
            <div className="main">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="container-fluid mt-5 main-wrapper">
                    <Table />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;