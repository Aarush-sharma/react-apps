import bg from "./public/bg.svg";
import ToggleButton from "./toggle";
import { useState } from "react";

const Login = () => {
  const [Email, setEmail] = useState("");
  return (
  <>
  <img src={bg} alt="background img" className="w-screen h-screen object-cover z-0"></img>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-3/4 w-2/5 bg-transparent backdrop-blur-lg flex flex-col pl-10 justify-center border-solid border-gray-300 border rounded-[80px] shadow-lg">
      <span className="text-gray-600 font-bold text-4xl font-sans self-center relative -top-10 -left-8">Welcome, Back!!</span>
      <label htmlFor="email" className="ml-7 mt-5">Email</label>
      <input id="email" type="email" value={Email}  onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email" autoComplete="email" className="h-10 w-4/5 pl-2 rounded-[10px] ml-5 mt-1"/>
      <label htmlFor="Password" className="ml-7 mt-10">Password</label>
      <ToggleButton />
      <button type="submit" className="border border-gray-900 w-24 h-8 self-center top-10 relative -left-5 hover:bg-orange-200 transition rounded-[5px]">Log in </button>
    </div>
  </div>
  </>
  );
};
export default Login
