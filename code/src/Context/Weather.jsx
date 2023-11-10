import { createContext,useContext ,useState} from "react";
  import { getWeatherDataForCity,getWeatherDataForLocation } from "../api";
const WeatherContext= createContext(null);

// create usecontext for read this context page(ButtonWhether)
export const useWeather=()=>{
  return useContext(WeatherContext);
}
export const WeatherProvider = (props) =>{
  // code for context state
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    // create function which is actually fetch the data from datbase
    const fetchData=async()=>{
const response=await getWeatherDataForCity(searchCity);
console.log(response);
// je je function,componets aa function no use kre aetle automatic rerender thy jase
setData(response);
    };
    // create function which is actually fetch the data from datbase for location
    const fetchCurrentUserLocationData=()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        // console.log(position);
        getWeatherDataForLocation(position.coords.latitude + "," + position.coords.longitude)
        .then((data)=>{
            console.log(data);
            setData(data);
          })
        // fetchData();
      });
    };
    return(
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
};