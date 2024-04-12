import { event } from "./Name";
import eye from "./styles/public/eye.svg";
import hidden from "./styles/public/hidden.svg";
import { useState } from "react";

interface func {
  data:(data: string) => void;
  id:string
  placeholder:string;
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
    <div className="relative flex">
  <input
    className="h-10 w-4/5 ml-5 pl-2 rounded-[10px] mb-5 pr-[40px]"
    type={isVisible ? "password" : "text"}
    id={props.id}
    autoComplete="new-password"
    onChange={changehandler}
    placeholder={props.placeholder}
  />
  <button
    onClick={handleToggle}
    className="toggle-button absolute right-0 top-0 bottom-0 m-auto mr-[18%] mb-[3vh]"
  >
    <img
      src={isVisible ? hidden : eye}
      alt="Toggle password visibility"
    />
  </button>
</div>
  );
};
export default Passinput;
