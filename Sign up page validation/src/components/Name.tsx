import { useState } from "react";
interface event {
  target: {
    value: string;
  };
}
interface Boolean {
  value: void | boolean ;
  msg:  void | string;
}

function Name(props: Boolean) {
  let chars: string[] = [];
  const [Name, setName] = useState("");
  const namehandler = (e: event) => {
    setName(e.target.value);
    for (let i of Name) {
      chars.push(i); 
    }
    if (chars.length > 0 && chars[0] !== chars[0].toUpperCase()) {
      props.value = true;
      props.msg = "First character should be uppercase"
    }
  };
 
  return (
    <>
      <label htmlFor="Name" className="ml-7 mt-5">
        Name
      </label>
      <input
        id="Name"
        type="text"
        onChange={namehandler}
        placeholder="Enter your Name"
        autoComplete="Name"
        className="h-10 w-4/5 pl-2 rounded-[10px] ml-5 mt-1"
      />
    </>
  );
}

export default Name;
