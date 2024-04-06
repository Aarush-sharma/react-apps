import "./styles/table.css"

let Card = ({ value, title }) => {
  return (
    <div className=" relative w-full flex justify-center items-center">
      <div className="card bg-transparent backdrop-blur-lg rounded-lg  shadow-lg p-4 w-full">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-white text-lg">{value}</p>
      </div>
    </div>
  );
};

export default Card;
