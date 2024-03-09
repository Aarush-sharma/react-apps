
const Currweather = () => {
    
  let calltype = "/current.json";
  let region = "london";
  let fetcher = async () => {
    let baseURL =
      "http://api.weatherapi.com/v1" +
      calltype +
      "?key=9fd4e7ab3da34227b92104746240103&q=" +
      region +
      "&aqi=no";
    let response = await fetch(baseURL);
    let data = await response.json();
    console.log(data);
    console.log(baseURL);
  };
  fetcher();
  return (
      <div className="w-full h-full bg-gray-900">
    <input type="text" className="Location w-2/3" />
  </div>
  );
};
Currweather();
export default Currweather;
