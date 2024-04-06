
import "./styles/input.css";
import Taskhandler from "./taskhandler";

interface input {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  onclick:React.MouseEventHandler<HTMLButtonElement>
}

export default function Input(props: input) {
  return (
    <div className="searchBox mt-10 ">
      <input
        className="searchInput text-xl"
        type="text"
        onChange={props.onChange}
        placeholder="Write your task "
      />
      <Taskhandler onclick={props.onclick}></Taskhandler>
    </div>
  );
}
