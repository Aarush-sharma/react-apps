import sun from "./styles/assets/sun.svg";
import "./styles/sun.css";
import stars from "./styles/assets/stars.svg";
import esun from "./styles/assets/esun.svg";
const Bg = (data) => {
  const Date = (dateString) => {
    const parts = dateString.split(":");
    return `${parts[0]}`;
  };
 let hour = Date(data);
  let bgClass = "";

  if (hour >= 6 && hour < 18) {
    bgClass = "day"; // Daytime
  } else if (hour >= 18 && hour < 20) {
    bgClass = "evening"; // Evening
  } else {
    bgClass = "night"; // Nighttime
  }

  return (
    <div className={`${bgClass} h-screen bg-gradient-to-b`}>
      {bgClass === "day" && (
        <img
          className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={sun}
          alt="sun"
        />
      )}

      {bgClass === "evening" && (
        <img
          className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={esun}
          alt="sun"
        />
      )}

      {bgClass === "night" && (
        <img
          className="sun absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={stars}
          alt="moon"
        />
      )}
    </div>
  );
};

export default Bg;
