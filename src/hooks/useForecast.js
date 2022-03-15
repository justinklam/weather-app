import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  // get where on earth_id
  const getWoeid = async (location) => {
    // destructuring response to pull data out
    const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});
    // console.log({data});

    if (!data || data.length === 0) {
      setError('Location not found, please enter a new location!');
      return;
    }
    return data;
  };

  // get weather
  const getForecastData = async (woeid) => {
    const {data} = await axios(`${REQUEST_URL}/${woeid}`)

    if (!data || data.length === 0) {
      setError('Error locating forecast data');
      return;
    }
    return data;
  }

  const submitRequest = async location => {
    const response = await getWoeid(location);
    const data = await getForecastData(response[0].woeid);

    // console.log({data});
  };

  return {
    isError, 
    isLoading, 
    forecast,
    submitRequest
  };
  
};

export default useForecast;