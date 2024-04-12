import { useState } from "react";
import { Data } from "./Name";
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
  const specialSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (pass1 !== "" && !/\d/.test(pass1)) {
    props.value(true);
    props.msg("Password should contain atleast a number");
  } else if (pass1 !== "" && !specialSymbols.test(pass1)) {
    props.value(true);
    props.msg("Password should contain a special character");
  } else if (pass2 !== "" && pass1 !== "" && pass1 !== pass2) {
    props.value(true);
    props.msg("Passwords does not match");
  } else if (pass2 !== "" && pass1 !== "" && pass1 === pass2) {
    props.value(false);
  }

  console.log(pass1, pass2);
  return (
    <>
      <Passinput id="password1" data={val1} placeholder="Enter your password"></Passinput>
      <Passinput id="password2" data={val2} placeholder="Confirm password"></Passinput>
    </>
  );
}

export default Password;
