import { useEffect, useState } from "react";
import Card from "./card"
import Mainhome from "./home";

const Currweather = (props) => {
  
 
 const [data,setdata] = useState([])

 useEffect(()=>{
  let fetchdata = async () => {
    try{
      let baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.region}?unitGroup=us&include=current&key=G2C4SU2XUWHCJUENLR5CYKKRR&contentType=json`
    let response = await fetch(baseURL);
    let info = await response.json();
    setdata(info.currentConditions);
    console.log(data)
    
    } catch(error){
      console.error("failed to fetch data",error)
    }
    
  }
 
  fetchdata();
  
 },[])

  return (
    <>
    
      <div>{data.datetimeEpoch}</div>
       <Card windspeed={data.windspeed} prefix="windspeed:"></Card>
      
    </>
  );
};

export default Currweather;
