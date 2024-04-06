import React from 'react'
import bg from "./styles/public/bg.svg";
interface parent{
    children:React.ReactNode
}
function Background(props:parent) {
  return (
    <>
    <img
        src={bg}
        alt="background img"
        className="w-screen h-screen object-cover z-0"
      ></img>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-3/4 w-2/4 bg-transparent backdrop-blur-lg flex flex-col pl-10 justify-center items-center border-solid border-gray-300 border rounded-[80px] shadow-lg">
          <span className="text-gray-600 font-bold text-4xl font-sans self-center relative -top-10 -left-8">
            SIGN,UP!!
          </span>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  )
}

export default Background