import { useState } from "react";

  
const Mainhome = ()=>{

    const [light, setLight] = useState(false);
    const toggleLight = () => {
        setLight(!light);
    };
 return(
    <button
    style={Props} onClick={toggleLight}
    className="curve h-7 w-7 border bg-neutral-900 px-1 py-[2px] absolute rounded-full ease-in-out justify-self-end">
    <img src={light ? lightmode : darkmode} alt="toggle btn"></img>
  </button>
 );


}
export default Mainhome;