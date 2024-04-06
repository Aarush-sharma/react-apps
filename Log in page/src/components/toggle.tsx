import eye from "./public/eye.svg";
import hidden from "./public/hidden.svg";
import { useState } from "react";

const ToggleButton = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <input
        className="h-10 w-4/5 ml-5 pl-2 rounded-[10px] mt-1 mb-8"
        type={isPasswordVisible ? "password" : "text"}
        value={password} id="password" autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleTogglePassword} className="ml-2 relative top-1">
        <img
          src={isPasswordVisible ? hidden : eye}
          alt="Toggle password visibility"
        />
      </button>
    </div>
  );
};
export default ToggleButton;
