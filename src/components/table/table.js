import React, { useState, useEffect } from "react";
import HttpService from "../../shared/http.service";


const Table = () => {

    const [users, setUser] = useState([]);
    const GetAllUser = () => {
        HttpService.getAll('users')
            .then((response) => {
                if (response) {
                    if (response.data) {
                        setUser(response.data)
                    }
                }
            }).catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        GetAllUser();
    }, [])

    return (
        <>
        <h1>All Users</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map((data) => (
                    <tr>
                        <th scope="row">{data.id}</th>
                        <td>{data.Name}</td>
                        <td>{data.email}</td>
                        <td>{data.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Table;