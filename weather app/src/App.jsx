import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainhome from "./components/home";
import Currweather from "./components/api caller";
import RegionInput from "./components/loc input";

function App() {
  const [data, setdata] = useState("");

  const regionhandler = (region) => {
    setdata(region);
  };
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div
                  className="bgimage"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                  }}
                >
                  <Mainhome />
                  <RegionInput region={data} onRegionChange={regionhandler} />
                </div>
              </>
            }
          ></Route>

          <Route
            path="/current-weather"
            element={<>
            
            <Currweather region={data} />
        
            </>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
