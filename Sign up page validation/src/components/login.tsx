import { useState } from "react";
import Name from "./Name";
import Email from "./email";
import Password from "./password";
import Background from "./background";
import Button from "./button";


const Login = () => {
  const [val,setval] = useState(false)
  const [msg , setmsg] = useState("")
  console.log(val,msg)
  return (
    <>
      <Background value={val} msg={msg}>
      <Name value={} msg={}/>
        <Email />
        <label> Enter password
        <Password />
        </label>
        <label > Confirm password
        <Password />
        </label>
        <Button/>
      </Background>
    </>
  );
};
export default Login;
