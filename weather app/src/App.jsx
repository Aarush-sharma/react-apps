import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainhome from "./components/home";
import Currweather from "./components/api caller";
import RegionInput from "./components/loc input"; // Import RegionInput component

function App() {
  const [data, setdata] = useState("");

  const regionhandler = (region) => {
    setdata(region);
  };

  return (
    <>
      <BrowserRouter>
        <div
          className="bgimage"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Mainhome />
                  <RegionInput region={data} onRegionChange={regionhandler} />
                </>
              }
            ></Route>
            <Route
              path="/current-weather"
              element={<Currweather region={data} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
