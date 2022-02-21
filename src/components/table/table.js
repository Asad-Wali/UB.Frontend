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

    const deleteUser = (id) => {
        HttpService.delete(`users/${id}`).then((response) => {
            if (response) {
                if (response.status === 200) {
                    alert('record deleted successfully')
                    window.location.reload();
                }
            }
        }).catch(() => {
            console.log('record deleted successfully');
        })
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
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data) => (
                        <tr>
                            <th scope="row">{data.id}</th>
                            <td>{data.Name}</td>
                            <td>{data.email}</td>
                            <td>{data.status}</td>
                            <td><button onClick={()=>deleteUser(data.id)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Table;