
import { useState } from "react";

function Email() {
    const [Email, setEmail] = useState("");
    
  return (
    <>
     <label htmlFor="email" className="ml-7 mt-5">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            autoComplete="email"
            className="h-10 w-4/5 pl-2 rounded-[10px] ml-5 mt-1"
          />
    </>
  )
}

export default Email