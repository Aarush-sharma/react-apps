import { useState } from "react";
import lightmode from "./assets/lightmode.svg";
import darkmode from "./assets/darkmode.svg";

const Mainhome = () => {
  const [light, setLight] = useState(false);

  const toggleLight = () => {
    setLight(!light);
  };
  document.body.className = !light
    ? "bg-gradient-to-r from-gray-900 via-slate-800 to-gray-700 min-h-screen"
    : "bg-gradient-to-r from-teal-900 via-blue-800 to-blue-900 min-h-screen";

  return (
    <>
        <div className="flex justify-center">
        <h1 className=" font-sans font-extrabold text-gray-200">WEATHER TODAY</h1>
        </div>
        <div>find how today weather</div>
        <div className=" flex justify-end">
          <button onClick={toggleLight} className=" bg-slate-600 rounded ">
            <img src={light ? lightmode : darkmode} alt="toggle btn"></img>
          </button>
        </div>
    </>
  );
};
export default Mainhome;
