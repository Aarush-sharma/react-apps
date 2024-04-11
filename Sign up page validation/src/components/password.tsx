import { useState } from "react";
import { Data, event } from "./Name";
import Passinput from "./passinput";
function Password(props: Data) {
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const val1 = (data: string) => {
    setpass1(data);
  };
  const val2 = (data: string) => {
    setpass2(data);
    
  };
  if (pass1 !== pass2) {
    props.value(true);
    props.msg("Passwords does not match");
  }

  console.log(pass1, pass2);
  return (
    <>
      <label>
        Enter password
        <Passinput data={val1}></Passinput>
      </label>
      <label>
        Confirm password
        <Passinput data={val2}></Passinput>
      </label>
    </>
  );
}

export default Password;
