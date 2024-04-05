import Heading from "./components/heading";
import "./components/styles/heading.css";
import Interface from "./components/interface";

function App() {
  return (
    <>
      <div className="main w-full h-full min-h-screen items-center flex flex-col">
        <Heading></Heading>
        <Interface></Interface>
      </div>
    </>
  );
}

export default App;
