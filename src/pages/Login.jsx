import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded username and password
    const validUsername = "admin";
    const validPassword = "password123";

    // Check if the entered username and password match
    if (username === validUsername && password === validPassword) {
      // Redirect to the dashboard page
      navigate("/dashboard");
    } else {
      // Show error message if login is invalid
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/156.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 bg-white bg-opacity-40 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6">
        <h1 className="text-4xl font-semibold text-center text-gray-700">Staff Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="text-sm text-gray-600 ml-2">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
