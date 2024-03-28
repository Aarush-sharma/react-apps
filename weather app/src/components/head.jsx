

const Head = (props) => {
  
  return (
    <>
      <div className="ml-0">
        <p className=" text-2xl font-bold text-gray-200 ml-2 mt-4">{props.conditions}</p>
        <p className="text-2xl font-bold text-gray-200 ml-2 mt-2">{props.time}</p>
        <p>{props.datetime}</p>
      </div>
    </>
  );
};
export default Head;

