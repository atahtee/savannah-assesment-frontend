import React, { useEffect, useState } from 'react';
import Loaders from '../components/Loaders';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setErrorMessage("Error fetching users. Please try again later");
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="max-w-screen-md mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">User List</h2>
            <ul className="space-y-4">
                {isLoading ? (
                    <Loaders />
                ) : errorMessage ? (
                    <p className="text-red-500">{errorMessage}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {users.map((user) => (
                            <li
                                key={user.id}
                                className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
                            >
                                {user.name}
                            </li>
                        ))}
                    </div>
                )}
            </ul>
        </div>
    );
};

export default UserList;
