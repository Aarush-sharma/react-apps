import { event } from "./Name";
import eye from "./styles/public/eye.svg";
import hidden from "./styles/public/hidden.svg";
import { useState } from "react";

interface func {
  data:(data: string) => void;
}
const Passinput = (props:func) => {
  const [isVisible, setVisible] = useState(false);

 const changehandler = (e:event) =>{
  props.data(e.target.value)
 }

  const handleToggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <input
        className="h-10 w-4/5 ml-5 pl-2 rounded-[10px] mt-1 mb-8"
        type={isVisible ? "password" : "text"}
         id="password" autoComplete="new-password"
        onChange={changehandler}
        placeholder="Enter your password"
      />
      <button onClick={handleToggle} className="ml-2 relative top-1">
        <img
          src={isVisible ? hidden : eye}
          alt="Toggle password visibility"
        />
      </button>
    </div>
  );
};
export default Passinput;
