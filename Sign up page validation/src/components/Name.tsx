
import { useState } from "react";

function Name() {
    const [Name, setName] = useState("");
    
  return (
    <>
     <label htmlFor="Name" className="ml-7 mt-5">
            Name
          </label>
          <input
            id="Name"
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            autoComplete="Name"
            className="h-10 w-4/5 pl-2 rounded-[10px] ml-5 mt-1"
          />
    </>
  )
}

export default Name