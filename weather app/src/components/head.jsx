import "./styles/table.css"

const Head = (props) => {
  
  return (
    <>
      <div className="ml-0">
        <p className=" text-2xl 2xl:text-5xl font-bold text-gray-200 ml-2 mt-4">{props.conditions}</p>
        <p className="text-2xl 2xl:text-5xl font-bold text-gray-200 ml-2 mt-2">{props.time}</p>
        <p>{props.datetime}</p>
      </div>
    </>
  );
};
export default Head;

