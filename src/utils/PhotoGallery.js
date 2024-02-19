import React, { useEffect, useState } from 'react';
import Loaders from '../components/Loaders';

const PhotoGallery = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching photos:", error);
                setErrorMessage("Error fetching photos. Please try again later.");
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
            {isLoading ? (
                <Loaders />
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <img
                            key={photo.id}
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                            className="photo-item w-full h-64 object-cover rounded"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
