import { useEffect, useState } from "react";
import Head from "./head";
import Tables from "./table";
import Card from "./card";
import Loader from "./loader"
import Bg from "./bg"

const Currweather = ({region}) => {
  const [img, setimg] = useState([]);
  const [data, setdata] = useState([]);
  const [Loading,setLoading] = useState(true)
  useEffect(() => { 
    
    let fetchdata = async () => {
      try {
        let baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${region}?unitGroup=uk&include=current&key=G2C4SU2XUWHCJUENLR5CYKKRR&contentType=json`;
        let response = await fetch(baseURL);
        let info = await response.json();
        setdata(info.currentConditions);
        setimg(info);
        
        
      } catch (error) {
        console.error("failed to fetch data", error);
      } finally{
        setLoading(false);
      }
    };
   if(Loading){fetchdata();}
   
  }, [region,Loading]);
  function capitalizeFirstLetter(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let add = capitalizeFirstLetter(img.address);
  console.log(img);
  return (
    <>
     {Loading ? (
        <Loader />
      ) : (
      <>
        <Bg data={data.datetime}></Bg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full   flex  pl-10 justify-between ">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="text-2xl font-bold text-gray-200 ml-0 flex">
                  {add} <p className="ml-2">Today</p>
                </div>
                <div className=" text-8xl flex justify-start text-gray-200">
                  {data.feelslike} <div className=" mt-5 text-4xl">°C</div>
                </div>
                 
                <Head
                  conditions={data.conditions}
                  icon={data.icon}
                  time={data.datetime}
                ></Head>
              </div>
            </div>
            <div className="mr-16 relative -top-20 flex flex-col ">
              <Tables forecast={img.days}></Tables>
              <div className="flex -top-24 gap-5 relative ">
              <Card value={data.humidity} title="Humidity" ></Card>
              <Card value={data.visibility} title="visiblity"></Card>
              </div>
            </div>
          </div>
        </div>
      </>
      )}
    </>
  );
};

export default Currweather;
