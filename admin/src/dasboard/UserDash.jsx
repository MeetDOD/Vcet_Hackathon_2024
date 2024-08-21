import React, { useEffect, useState } from 'react';

const UserDash = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [filterTeam, setFilterTeam] = useState('');
    const [filterCollege, setFilterCollege] = useState('');

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/users`, {
                    method: "GET",
                    headers: { 'Content-Type': 'application/json' }
                });

                let data = await res.json();
                if (res.status === 200) {
                    setUsers(data);
                } else {
                    alert("Something went wrong");
                }
            } catch (e) {
                console.log(e);
            }
        };

        getAllUsers();
    }, []);

    // Filter and search logic
    const filteredUsers = users.filter(user => {
        const nameMatch = `${user.fname} ${user.lname}`.toLowerCase().includes(search.toLowerCase());
        const teamMatch = filterTeam ? user.inTeam.toLowerCase().includes(filterTeam.toLowerCase()) : true;
        const collegeMatch = filterCollege ? user.college.toLowerCase().includes(filterCollege.toLowerCase()) : true;
        return nameMatch && teamMatch && collegeMatch;
    });

    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by team..."
                            value={filterTeam}
                            onChange={(e) => setFilterTeam(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter by college..."
                            value={filterCollege}
                            onChange={(e) => setFilterCollege(e.target.value)}
                        />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Team</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Year</th>
                            <th scope="col">College</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNo}</td>
                                <td>{user.inTeam}</td>
                                <td>{user.degree}</td>
                                <td>{user.year || "Not specified"}</td>
                                <td>{user.college}</td>
                                <td>{user.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserDash;
