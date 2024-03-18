import Currweather from "./components/api caller";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Mainhome from "./components/home";
function App() {
  const [data , setdata] = useState("")
  const regionhandler =(e)=>{
   setdata(e.target.value)
  }
  return(
  <>
    <BrowserRouter >
      
      <Routes >
        <Route path="/" element={
         <>
          <input onChange={regionhandler} className="border" value={data}></input>
          <button><Link to="/current-weather">get data</Link></button>
         </>
        }></Route>
        <Route path="/current-weather" element={<Currweather region={data}></Currweather>}></Route>
      </Routes>
    </BrowserRouter>
  </>
    

 );
}
 
export default App
