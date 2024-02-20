import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./context/userContext";
import Dashboard from "./pages/Dashboard";

axios.defaults.baseURL = "https://sil-assesment-server.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      {/* <Navbar /> */}
      <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </UserContextProvider>
  );
}

export default App;
