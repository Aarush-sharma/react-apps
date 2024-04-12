import { useState } from "react";
import Name from "./components/Name";
import Email from "./components/email";
import Password from "./components/password";
import Background from "./components/background";

const App = () => {
  const [val, setval] = useState<boolean>();
  const [msg, setmsg] = useState("");

  const Msgreciever = (data: string) => {
    console.log(data);
    setmsg(data);
  };
  const Valreciever = (data: boolean | undefined) => {
    console.log(data);
    setval(data);
  };
  const validator = () => {
    if (val === false) {
      alert("Sign up successfull");
    } else {
      alert("error");
    }
  };
  return (
    <>
      <Background value={val} msg={msg}>
        <Name value={Valreciever} msg={Msgreciever} />
        <Email value={Valreciever} msg={Msgreciever} />
        <Password value={Valreciever} msg={Msgreciever} />
        <div className="flex justify-center mb-10">
          <button
            type="submit"
            onClick={validator}
            className="border border-gray-900 w-24 h-8 top-10 relative  hover:bg-orange-200 transition rounded-[5px]"
          >
            {"sign up"}
          </button>
        </div>
      </Background>
    </>
  );
};
export default App;
