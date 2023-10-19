import React, { useState } from "react";
import weatherbackground from '../assets/weatherbackground.jpg'
const Login = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        if(userName==='abc' && password==='@123'){
            console.log('login successfull!')
        }else{
            <div>"Invalid username or password. Please try again"</div>
            console.log("Invalid login")
        }
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen xl:py-24"  style={{
      backgroundImage: `url(${weatherbackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="flex flex-col rounded-lg justify-center items-center "  >
         
          <div>Welcome To Weather Forecast</div>
          <div>Login in to continue</div>
          <div className="flex w-[500px] h-[400px] justify-center items-center p-6 ">
          <form className="justify-center w-full h-full">
            <div className="flex flex-col p-4">
              <label className="text-lg">User Name</label>
              <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required placeholder="Username" className="h-14 pl-4"/>
            </div>
            <div className="flex flex-col p-4">
              <label className="text-lg">Password</label>
              <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Password" className="p-1 border-b border-gray-500 focus:outline-none h-14 pl-4"/>
            </div>
            <div className="flex justify-center items-center p-8">
            <button type="submit" className="bg-blue-400 p-4 w-full" onClick={handleLogin}>Login</button>
            </div>
          
          </form>
          </div>
      </div>
      
    </div>
  );
};
export default Login;
