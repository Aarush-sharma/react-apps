import { useEffect, useState } from "react";
import Card from "./card";
import Tables from "./table"

const Currweather = (props) => {
  const [img, setimg] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    let fetchdata = async () => {
      try {
        let baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.region}?unitGroup=uk&include=current&key=G2C4SU2XUWHCJUENLR5CYKKRR&contentType=json`;
        let response = await fetch(baseURL);
        let info = await response.json();
        setdata(info.currentConditions);
        setimg(info)
        console.log(img);
      } catch (error) {
        console.error("failed to fetch data", error);
      }
    };

    fetchdata();
  }, []);
  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let add=capitalizeFirstLetter(img.address)
  return (
    <>
      <div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full bg-transparent backdrop-blur-lg flex flex-col pl-10 justify-center">
        <div className="text-2xl font-bold text-gray-200 ml-0">{add}</div>
        <div className=" text-8xl flex justify-start text-gray-200">
          {data.feelslike} <div className=" mt-5 text-4xl">°C</div>
        </div>
        
        <Card
          conditions={data.conditions}
          icon={data.icon}
          time={data.datetime}
        ></Card>
         <Tables></Tables>
      </div>
        </div>
      </div>
      
     
    </>
  );
};

export default Currweather;
