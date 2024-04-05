import { useState } from "react";

import Task from "./task";
import Input from "./input";
import Chexkbox from "./checkbox";
import Delete from "./deletebtn";
interface inputhandle {
  target: {
    value: string;
  };
}

export default function Interface() {
  const [count, setcount] = useState(0);
  const [data, setData] = useState("");
  const [render, setrender] = useState<boolean[]>([]);

  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    console.log(e.target.value);
  };

  const taskHandler = () => {
    if (data === "") {
      alert("enter task");
    } else {
      setcount((prevCount) => prevCount + 1);
      setrender((prevrender) => [...prevrender, true]);
    }
  };

  const togglerender = (i: number) => {
    setrender((prevrender) => {
      const updatedrender = [...prevrender];
      updatedrender[i] = !updatedrender[i];
      return updatedrender;
    });
  };

  return (
    <>
      <div className="flex w-2/5 mb-10">
        <Input onChange={formHandler} onclick={taskHandler} />
      </div>
      {Array.from({ length: count }).map(
        (_, index) =>
          render[index] && (
            <div key={index} className="task flex bg-gradient-to-br rounded-full from-slate-950 to-slate-900 px-5 py-2 my-2">
              <Chexkbox onChange={() => togglerender(index)} />
              <Task value={data} />
              <Delete onChange={() => togglerender(index)}></Delete>
            </div>
          )
      )}
    </>
  );
}
export type { inputhandle };
