import React from 'react'
import { useWeather } from '../Context/Weather';

const CardWhether = () => {
    const weather = useWeather();

    return (
      <div className="card">
        <img src={weather?.data?.current?.condition?.icon} />
        <h2>{weather.data?.current?.temp_c}. C</h2>
        <h5>
          {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
          {weather.data?.location?.country}
        </h5>
      </div>
    );
  };

export default CardWhether
// https://www.weatherapi.com/unverified.aspx?tagid=11202311090211111109
// 82bbcc866e074c9b834110201230911