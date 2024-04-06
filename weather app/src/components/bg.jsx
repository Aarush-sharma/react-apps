import sun from "./styles/assets/sun.svg";
import "./styles/sun.css";
import stars from "./styles/assets/stars.svg";
import esun from "./styles/assets/esun.svg";
import { datecontext } from "./api caller";
import { useContext } from "react";

const Bg = () => {
  const data = useContext(datecontext);
  if (typeof data !== "string") {
    return console.log("Error: Invalid data received from context.");
  }
  const parts = data.split(":");
  const hour = `${parts[0]}`;

  let bgClass = "";
  if (hour >= 9 && hour < 17) {
    bgClass = "day"; // Daytime
  } else if (hour >= 5 && hour < 9 || hour >= 17 && hour < 20) {
    bgClass = "evening";
  } else {
    bgClass = "night"; // Nighttime
  }
  return (
    <div className={`${bgClass} h-screen bg-gradient-to-b`}>
      {bgClass === "day" && (
        <div className=" bg-gradient-to-br from-blue-200 to-blue-400 h-full absolute top-0 left-0 w-full">
          <img
            className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={sun}
            alt="sun"
          />
        </div>
      )}

      {bgClass === "night" && (
        <div className="night-gradient bg-gradient-to-br from-gray-900 to-black h-full absolute top-0 left-0 w-full">
          <img
            className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={stars}
            alt="moon"
          />
        </div>
      )}

      {bgClass === "evening" && (
        <div className="evening-gradient  bg-gradient-to-br from-orange-300 to-orange-500 h-full absolute top-0 left-0 w-full">
          <img
            className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            
            src={esun}
            alt="sun"
          />
        </div>
      )}
    </div>
  );
};

export default Bg;
