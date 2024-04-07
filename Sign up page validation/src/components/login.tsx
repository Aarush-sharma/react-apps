import Name from "./Name";
import Background from "./background";
import Button from "./button";
import Email from "./email";
import Password from "./password";

const Login = () => {
  let val=false ;
  let msg="";
  return (
    <>
      <Background value={val} msg={msg}>
        <Name value={val} msg={msg}/>
        <Email />
        <label > Enter password
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
