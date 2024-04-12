import { useState } from "react";
import { Data , event } from "./Name";


function Email(props:Data) {
  const [Email, setEmail] = useState("");
  const validator = (e:event) => {
    setEmail(e.target.value)
   setTimeout(()=>{
   if(Email.indexOf("@")===-1 || Email.indexOf(".")===-1){
    props.value(true);
    props.msg("Enter a valid email")
   }else{
    props.value(false);
   }
   },1000)
   
  };
  return (
    <>
    
      <input
        id="email"
        type="email"
        value={Email}
        onChange={validator}
        placeholder="Enter your Email"
        autoComplete="email"
        className="h-10 w-4/5 pl-2 rounded-[10px] ml-5 mb-5 mt-1"
      />
    </>
  );
}

export default Email;
