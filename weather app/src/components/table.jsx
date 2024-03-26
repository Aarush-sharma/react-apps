

function Tables(props) {
  //discription,datetime,feelslike,sunrise , sunset
  const data = props.forecast;
  const Date = (dateString) => {
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}`;
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <table className="w-full sm:w-[80vh] lg:w-1/2 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr>
              <th >Date</th>
              <th >Discription</th>
              <th >temp</th> 
              <th >sunrise</th>
              <th >sunset</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {data && (
              <tr>
                <td className="text-xs font-semibold">{Date(data[0].datetime)}</td>
                <td className="text-xs font-semibold">{data[0]?.conditions}</td>
                <td className="text-xs font-semibold">{data[0]?.feelslike}°C</td>
                <td className="text-xs font-semibold">{data[0]?.sunset}</td>
                <td className="text-xs font-semibold">{data[0]?.sunrise}</td>
              </tr>
            )}
            {data && (
              <tr>
                <td className="text-xs font-semibold">{Date(data[1].datetime)}</td>
                <td className="text-xs font-semibold">{data[1]?.conditions}</td>
                <td className="text-xs font-semibold">{data[1]?.feelslike}°C</td>
                <td className="text-xs font-semibold">{data[1]?.sunset}</td>
                <td className="text-xs font-semibold">{data[1]?.sunrise}</td>
              </tr>
            )}
            {data && (
              <tr>
                <td className="text-xs font-semibold">{Date(data[2].datetime)}</td>
                <td className="text-xs font-semibold">{data[2]?.conditions}</td>
                <td className="text-xs font-semibold">{data[2]?.feelslike}°C</td>
                <td className="text-xs font-semibold">{data[2]?.sunset}</td>
                <td className="text-xs font-semibold">{data[2]?.sunrise}</td>
              </tr>
            )}
            {data && (
              <tr>
                <td className="text-xs font-semibold">{Date(data[3].datetime)}</td>
                <td className="text-xs font-semibold">{data[3]?.conditions}</td>
                <td className="text-xs font-semibold">{data[3]?.feelslike}°C</td>
                <td className="text-xs font-semibold">{data[3]?.sunset}</td>
                <td className="text-xs font-semibold">{data[3]?.sunrise}</td>
              </tr>
            )}
            {data && (
              <tr>
                <td className="text-xs font-semibold">{Date(data[4].datetime)}</td>
                <td className="text-xs font-semibold">{data[4]?.conditions}</td>
                <td className="text-xs font-semibold">{data[4]?.feelslike}°C</td>
                <td className="text-xs font-semibold">{data[4]?.sunset}</td>
                <td className="text-xs font-semibold">{data[4]?.sunrise}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tables;
