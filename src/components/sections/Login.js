import React, { useState } from "react";
import loginbackground from "../assets/loginbackground.avif"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "admin" && password === "admin") {
      navigate("/home");
    } else {
      <div>"Invalid username or password. Please try again"</div>;
      console.log("Invalid login");
    }
  };
  return (
    <div
      className="flex flex-col  h-screen p-24 gap-4"
      style={{
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-start text-blue-600 text-4xl md:text-6xl font-bold backdrop-blur-md drop-shadow-2xl">
        Welcome To Weather Forecast
      </div>
      <div className="text-4xl text-white font-bold">Login in to continue</div>
      <form className="justify-center flex-col md:w-1/2">
        <div className="flex p-4 items-center w-full">
          <sapan className="text-xl text-black font-bold w-44">User Name</sapan>
          <input
            className="flex w-full py-2 px-1"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="flex  p-4 items-center w-full">
          <sapan className="text-xl text-black font-bold w-44">Password</sapan>
          <input
            className="flex w-full py-2 px-1"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <div className="flex  items-center p-4">
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 md:w-1/2  text-white text-xl font-bold rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
