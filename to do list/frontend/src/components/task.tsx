import { useState } from "react";
import "./styles/task.css"
import pen from "./styles/assets/pen.svg"
import tick from "./styles/assets/tick.svg"
interface val {
  value?: string;
  key?: number;
}
function Task(props: val) {
  const [disabled, setDisabled] = useState(true);

  const toggleEdit = () => {
    setDisabled((prevDisabled) => !prevDisabled);
  };

  return (
    <div className="flex search-header mx-2">
      <input
        defaultValue={props.value}
        className="search-header__input w-[35vw]"
        type="text"
        disabled={disabled}
      />
      <button className="search-header__button" onClick={toggleEdit}>
        <img src={disabled ? pen : tick} alt="tdj" />
      </button>
    </div>
  );
}

export default Task;
