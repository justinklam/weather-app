import { useState } from "react";
import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  // call the api
  const submitRequest = async location => {

    // get where on earth_id
    // destructuring response to pull data out
    const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});
    console.log({data});
    
    if (!data || data.length === 0) {
      setError('Location not found, please enter a new location!');
      return;
    }
    
    // get weather
    const response = await axios(`${REQUEST_URL}/${data[0.].woeid}`)
    console.log({response});

  };

  return {
    isError, 
    isLoading, 
    forecast,
    submitRequest
  };
  
};

export default useForecast;