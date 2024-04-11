import { useState } from "react";
import Name from "./Name";
import Email from "./email";
import Password from "./password";
import Background from "./background";
import Button from "./button";


const Login = () => {
  const [val,setval] = useState(false)
  const [msg , setmsg] = useState("")
  const Msgreciever = (data: string) => {
    console.log( data);
    setmsg(data)
  };
  const Valreciever = (data: boolean) => {
    console.log( data);
    setval(data)
  };
  return (
    <>
      <Background value={val} msg={msg}>
      <Name value={Valreciever} msg={Msgreciever}/>
        <Email value={Valreciever} msg={Msgreciever}/>
        <Password value={Valreciever} msg={Msgreciever}/>
        <Button/>
      </Background>
    </>
  );
};
export default Login;
