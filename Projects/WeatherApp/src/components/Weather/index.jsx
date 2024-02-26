import React, { useEffect, useState } from "react";
import Search from "../Search/index";

const index = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (params) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=6b6b0ab914061b8be9caaa187180f728`
      );
      const data = await response.json();
      console.log(data);

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData("Lahore");
  }, []);

  const handleSearch = async () => {
    fetchWeatherData(search);
  };

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
       {loading ? (
        <div className="loading">Loading...</div>
      ) : 
      <div className="">
        <div className="city-name">
          <h2>
            {
              weatherData?.name
            },
            <span>{weatherData?.sys?.country}</span>
          </h2>
        </div>
        <div className="date">
          <span>{getCurrentDate()}</span>
        </div>

        <div className="temp">{weatherData?.main?.temp}</div>

        <p className="description">
            {
              weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ""
            }
        </p>
        <div className="weather-info">
            <div className="column">
              <div>
                  <p className="wind">{weatherData?.wind?.speed}</p>
                  <p>wind speed</p>
              </div>
              </div>
            <div className="column">
              <div>
              <p className="wind">{weatherData?.main?.humidity}</p>
              <p>humidity</p>
              </div>
              </div>
              </div>
      </div>
      }
    </div>
  );
};

export default index;
