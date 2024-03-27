let Card = ({ value, title }) => {
  return (
    <div className="relative">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-4 w-full">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );
};

export default Card;
