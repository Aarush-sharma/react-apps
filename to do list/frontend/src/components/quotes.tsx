import { useEffect, useState } from "react";
import "./styles/quotes.css"
interface data {
  quote: string;
  author: string;
}
export default function Quote() {
  const [data, setdata] = useState<data>();
  let options = {
    method: "GET",
    headers: { "x-api-key": "vHVCjGDC4gp3tZpWa+sRpQ==anV09bHWX8JgzvoK" },
  };

    // let url = `https://api.api-ninjas.com/v1/quotes?category=inspirational`
  useEffect(() => {
    let fetchdata = async () => {
      try {
        let response = await fetch(url, options);
        let info = await response.json();
        setdata(info[0]);
      } catch (error) {
        console.error("failed to fetch data", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="text text-white flex justify-center">
        {data?.quote}
      </div>
      <div className="text text-white w-full flex justify-center">~{data?.author}</div>
    </>
  );
}
