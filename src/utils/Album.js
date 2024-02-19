import React, { useEffect, useState } from "react";
import Loaders from "../components/Loaders";

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        setErrorMessage("Error fetching photos. Please try again later");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">These are the albums</h2>
      <ul className="space-y-4">
        {isLoading ? (
          <Loaders />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {albums.map((album) => (
              <li
                key={album.id}
                className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
              >
                {album.title}
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Album;
