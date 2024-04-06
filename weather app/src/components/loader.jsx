import React from "react";
import "./styles/loader.css";
function Loader() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-[#292929]">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
