import React, { useEffect, useState } from 'react';
import Loaders from '../components/Loaders';

export const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching todos:", error);
                setErrorMessage("Error fetching todos. Please try again later");
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="max-w-screen-md mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Todos</h2>
            {isLoading ? (
                <Loaders />
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-lg font-semibold">{todo.title}</h3>
                            <p className={`text-sm ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
                                {todo.completed ? 'Completed' : 'Incomplete'}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
