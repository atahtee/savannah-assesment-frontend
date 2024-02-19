import React, { useContext, useState, lazy, Suspense } from "react";

import PostList from "../utils/PostList";
import UserList from "../utils/UserList";
import PhotoGallery from "../utils/PhotoGallery";
import Album from "../utils/Album";
import { Todos } from "../utils/Todos";
import { UserContext } from "../context/userContext";
import Loaders from "../components/Loaders";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [selectedSection, setSelectedSection] = useState(null);


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mt-0 p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Welcome to JSONPlaceholder Api
        </h1>
        <div>{!!user && <h2>Hi {user.name}</h2>}</div>
        <div className="flex flex-wrap justify-center mb-8">
          <button
            className={`px-4 py-2 m-2 rounded-md ${
              selectedSection === "posts"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedSection("posts")}
          >
            Latest Posts
          </button>
          <button
            className={`px-4 py-2 m-2 rounded-md ${
              selectedSection === "users"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedSection("users")}
          >
            User List
          </button>
          <button
            className={`px-4 py-2 m-2 rounded-md ${
              selectedSection === "photos"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedSection("photos")}
          >
            Photo Gallery
          </button>
          <button
            className={`px-4 py-2 m-2 rounded-md ${
              selectedSection === "albums"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedSection("albums")}
          >
            Albums
          </button>
          <button
            className={`px-4 py-2 m-2 rounded-md ${
              selectedSection === "todos"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedSection("todos")}
          >
            Todos
          </button>
        </div>

        {selectedSection === "posts" && (
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
            <Suspense fallback={<Loaders />}>
              <PostList />
            </Suspense>
          </div>
        )}

        {selectedSection === "users" && (
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">User List</h2>
            <UserList />
          </div>
        )}

        {selectedSection === "photos" && (
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Photo Gallery</h2>
            <PhotoGallery />
          </div>
        )}

        {selectedSection === "albums" && (
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Albums</h2>
            <Album />
          </div>
        )}

        {selectedSection === "todos" && (
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Todos</h2>
            <Todos />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
