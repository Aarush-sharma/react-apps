import Name from "./Name";
import Background from "./background";
import Button from "./button";
import Email from "./email";
import Password from "./password";
import Error from "./warning";
const Login = () => {
  return (
    <>
      <Background>
        <Name />
        <Email />
        <label > Enter password
        <Password />
        </label>
        <Error/>
        <label > Confirm password
        <Password />
        </label>
        <Button/>
      </Background>
    </>
  );
};
export default Login;
