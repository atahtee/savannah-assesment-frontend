import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const google = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registration Successful. Please Login");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-6">
          Welcome to the Health Transformation Adventure! We're embarking on a
          mission to revolutionize health systems through the magic of
          technology. Hold on tight as we dive into the world of data, exploring
          and consuming information from an API. 🕵️‍♀️ Oh, did we mention it's not
          just any journey? It's a tech assessment brought to you by Savannah
          Informatics. 🤖 Don't worry, our code is as healthy as it gets... we
          think! Ready to join us on this exciting ride? 
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={registerUser}
          >
            Start the Adventure! 🌟
          </button>
        </h2>
      </div>
      <div className="bg-white w-full md:max-w-md p-8 rounded-md shadow-md ml-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Assessment</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              type="text"
              placeholder="Enter name.."
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              type="email"
              placeholder="Enter email.."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              type="password"
              placeholder="Enter password.."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mb-4">
            <button
              className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={registerUser}
            >
              Register
            </button>
            <button
              className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button
              className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={google}
            >
              Google
            </button>
            <button className="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
              Facebook
            </button>
            <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
