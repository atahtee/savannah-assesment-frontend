import React, { useState, useEffect } from 'react';
import Loaders from '../components/Loaders';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching photos:', error);
                setErrorMessage("Error fetching photos. Please try again later");
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
            <ul>
                {isLoading ? (
                    <Loaders />
                ) : errorMessage ? (
                    <p className="text-red-500">{errorMessage}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <li key={post.id} className="bg-white rounded shadow p-4">
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                <p className="text-gray-700">{post.body}</p>
                            </li>
                        ))}
                    </div>
                )}
            </ul>
        </div>
    );
};

export default PostList;
