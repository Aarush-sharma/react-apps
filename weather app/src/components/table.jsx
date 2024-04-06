import "./styles/table.css"

function Tables(props) {
  
  const data = props.forecast;
  const Date = (dateString) => {
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}`;
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <table className="  backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr>
              <th className=" px-2">Date</th>
              <th className=" px-2">Discription</th>
              <th className=" px-2">temp</th>
              <th className=" px-2">sunrise</th>
              <th className=" px-2">sunset</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {data && (
              <tr className="py-2">
                <td className="text-xs font-semibold py-2  2xl:text-lg text-white pl-2">
                  {Date(data[0].datetime)}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[0]?.conditions}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[0]?.feelslike}°C
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[0]?.sunset}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[0]?.sunrise}
                </td>
              </tr>
            )}
            {data && (
              <tr className="py-2">
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white pl-2">
                  {Date(data[1].datetime)}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[1]?.conditions}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[1]?.feelslike}°C
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[1]?.sunset}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[1]?.sunrise}
                </td>
              </tr>
            )}
            {data && (
              <tr className="py-2">
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white pl-2">
                  {Date(data[2].datetime)}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[2]?.conditions}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[2]?.feelslike}°C
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[2]?.sunset}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[2]?.sunrise}
                </td>
              </tr>
            )}
            {data && (
              <tr className="py-2">
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white pl-2">
                  {Date(data[3].datetime)}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[3]?.conditions}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[3]?.feelslike}°C
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[3]?.sunset}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[3]?.sunrise}
                </td>
              </tr>
            )}
            {data && (
              <tr className="py-2">
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white pl-2">
                  {Date(data[4].datetime)}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[4]?.conditions}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[4]?.feelslike}°C
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[4]?.sunset}
                </td>
                <td className="text-xs font-semibold py-2 2xl:text-lg text-white">
                  {data[4]?.sunrise}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tables;
